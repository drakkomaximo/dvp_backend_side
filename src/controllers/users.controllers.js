import { pool } from "../db.js";
import { axiosInstance } from "../config.js";

export const searchUsersByName = async (req, res) => {
  const { userName } = req.params;

  try {
    const response = await axiosInstance.get(`/search/users?q=${userName}`);
    res.status(200).json({ 
        status: 200,
        data: {...response.data}
     });
  } catch (error) {
    return res.status(500).json({ 
        status: 500,
        data: 'Error en el servidor'
     });
  }
};

export const getUserByName = async (req, res) => {
  const { userName } = req.params;
  try {
    const response = await axiosInstance.get(`/users/${userName}`);
    res.status(200).json({ 
        status: 200,
        data: {...response.data}
     });
  } catch (error) {
    return res.status(500).json({ 
        status: 500,
        data: 'Error en el servidor'
     });
  }
};

export const selectUserByName = async (req, res) => {
  const { selectedName, id } = req.body;
  try {

    const dbResponse = await pool.query("SELECT * FROM accounts WHERE id = ?", [
      id,
    ])

    if (dbResponse[0][0]?.id){

      const result = await pool.query("SELECT * FROM selected_list WHERE github_user_name = ?", [
        selectedName,
      ])

      if(result[0].length > 0){
        return res.status(200).json({
          status: 200,
          data: `El usuario seleccionado ya se encuentra en la lista`,
        });
      }

      await pool.query("INSERT INTO selected_list SET ?", {
        account_id: dbResponse[0][0]?.id,
        github_user_name: selectedName,
      });

      res.json({
        status: 200,
        data: 'Selection has been saved',
      });
    }else{
      const result = await pool.query("INSERT INTO accounts SET ?", {
        account_name: `chamo${id}`,
      });

      if(result[0].insertId){
        await pool.query("INSERT INTO selected_list SET ?", {
          account_id: result[0].insertId,
          github_user_name: selectedName,
        });
      }

      res.json({
        status: 200,
        data: 'Selection has been saved',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      data: "Error en el servidor",
    });
  }
};

export const getSelectedUsersById = async (req, res) => {
  const { id } = req.params;
  try {

    const dbResponse = await pool.query("SELECT * FROM selected_list WHERE account_id = ?", [
      id,
    ])

    if(dbResponse[0].length > 0){
      res.json({
        status: 200,
        data: dbResponse[0],
      });
    }else{
      res.json({
        status: 200,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      data: "Error en el servidor",
    });
  }
};
