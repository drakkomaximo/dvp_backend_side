import axios from "axios";
import { config } from "dotenv";

config()

export const axiosInstance = axios.create({
    baseURL: 'https://api.github.com'
})

export const PORT = process.env.PORT || 4000;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || root;
export const DB_PASSWORD = process.env.DB_PASSWORD || '@Dvp1234';
export const DB_DATABSE = process.env.DB_DATABSE || 'githubUsersdb';