import { pool } from "../db.js";
import bcrypt from "bcryptjs";

export const regiterUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    if(!username.replace(/\s+/g, "") || !password || !email.replace(/\s+/g, "")){
      return res.status(400).json({
        status: 400,
        data: `Hay campos vacios`,
      });
    }
    
    const usernameLower = username.toLowerCase().replace(/\s+/g, "");
    const emailLower = email.toLowerCase().replace(/\s+/g, "");
    let passwordHash = await bcrypt.hash(password, 8);

    const dbResponse = await pool.query("SELECT * FROM users WHERE email = ?", [
      emailLower,
    ]);

    if (dbResponse[0].length > 0)
      return res.status(400).json({
        status: 400,
        data: `Email: ${emailLower}, ya existe`,
      });

    const result = await pool.query("INSERT INTO users SET ?", {
      username: usernameLower,
      password: passwordHash,
      email: emailLower,
    });
    res.json({
      status: 200,
      data: {
        id: result[0].insertId,
        username: usernameLower,
        email: emailLower,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: "Error en el servidor",
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  let comparePassword = false;
  try {
    if(!password.replace(/\s+/g, "") || !email.replace(/\s+/g, "")){
      return res.status(400).json({
        status: 400,
        data: `Hay campos vacios`,
      });
    }

    const emailLower = email.toLowerCase().replace(/\s+/g, "");

    const dbResponse = await pool.query("SELECT * FROM users WHERE email = ?", [
      emailLower,
    ]);

    if (dbResponse[0][0]?.password) {
      comparePassword = await bcrypt.compare(
        password,
        dbResponse[0][0].password
      );
    }

    if (dbResponse.length === 0 || !comparePassword)
      return res.status(400).json({
        status: 400,
        data: "El usuario no existe",
      });
    res.json({
      status: 200,
      data: {
        username: dbResponse[0][0].username,
        email: emailLower,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      data: "Error en el servidor",
    });
  }
};
