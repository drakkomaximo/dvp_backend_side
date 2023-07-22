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

export const postUsers = (req, res) => res.send("creando usuarios");
export const putUsers = (req, res) => res.send("actualizando usuarios");
export const deleteUsers = (req, res) => res.send("eliminando usuarios");
