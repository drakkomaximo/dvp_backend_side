import { pool } from "../db.js";
import bcrypt from "bcryptjs";

export const regiterUser = async (req, res) => {
  const { username, password } = req.body;
  const usernameLower = username.toLowerCase().trim();
  try {
    let passwordHash = await bcrypt.hash(password, 8);
    const dbResponse = await pool.query(
      "SELECT * FROM users WHERE username = ?",
      [usernameLower]
    );

    console.log(dbResponse)
    if (dbResponse[0].length > 0)
      return res.status(400).json({
        status: 400,
        data: "El nombre de usuario ya existe",
      });

    const result = await pool.query("INSERT INTO users SET ?", {
      username: usernameLower.trim(),
      password: passwordHash,
    });
    res.json({
      status: 200,
      data:{
        id: result[0].insertId,
        username: usernameLower.trim()
      }
    });
  } catch (error) {
    return res.status(500).json({ 
      status: 500,
      data: 'Error en el servidor'
   });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const usernameLower = username.toLowerCase().trim();
  try {
    const dbResponse = await pool.query(
      "SELECT * FROM users WHERE username = ?",
      [usernameLower]
    );

    const comparePassword = await bcrypt.compare(password, dbResponse[0][0].password || 'no-existe');
    console.log(comparePassword)
    if (dbResponse.length === 0 || !comparePassword)
      return res.status(400).json({
        status: 400,
        data: "El usuario no existe",
      });
    res.json({
      status: 200,
      data: {
        username
      }
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ 
      status: 500,
      data: 'Error en el servidor'
   });
  }
};
