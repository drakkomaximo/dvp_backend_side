import { createPool } from "mysql2/promise";
import {
  MYSQLDB_HOST,
  MYSQLDB_DOCKER_PORT,
  MYSQLDB_ROOT_USER,
  MYSQLDB_ROOT_PASSWORD,
  MYSQLDB_DATABASE,
} from "./config.js";

export const pool = createPool({
  host: MYSQLDB_HOST,
  user: MYSQLDB_ROOT_USER,
  password: MYSQLDB_ROOT_PASSWORD,
  port: MYSQLDB_DOCKER_PORT,
  database: MYSQLDB_DATABASE,
});

pool
  .getConnection()
  .then((connection) => {
    console.log("Conexión a la base de datos de MySQL establecida con éxito!");
    connection.release();
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos:", error.message);
  });
