import axios from "axios";
import { config } from "dotenv";

config();

export const axiosInstance = axios.create({
  baseURL: process.env.GITHUB_URL || "https://api.github.com",
});

axiosInstance.defaults.headers.common['Authorization'] = `token ${
  process.env.GITHUB_PERSONAL_TOKEN ||
  "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"
}`;

export const PORT = process.env.PORT || 4000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || root;
export const DB_PASSWORD = process.env.DB_PASSWORD || "@Dvp1234";
export const DB_DATABSE = process.env.DB_DATABSE || "githubUsersdb";
