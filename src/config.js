import axios from "axios";
import { config } from "dotenv";

config();

export const axiosInstance = axios.create({
  baseURL: process.env.GITHUB_URL || "https://api.github.com",
});

// This token should be changed periodically
axiosInstance.defaults.headers.common['Authorization'] = `token ${
  process.env.GITHUB_PERSONAL_TOKEN ||
  "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"
}`;

export const NODE_LOCAL_PORT = process.env.NODE_LOCAL_PORT || 4000;
export const NODE_DOCKER_PORT = process.env.NODE_DOCKER_PORT || 3000;
export const MYSQLDB_HOST = process.env.MYSQLDB_HOST || "mysqldb";
export const MYSQLDB_DOCKER_PORT = process.env.MYSQLDB_DOCKER_PORT || 3306;
export const MYSQLDB_ROOT_USER = process.env.MYSQLDB_ROOT_USER || "root";
export const MYSQLDB_ROOT_PASSWORD = process.env.MYSQLDB_ROOT_PASSWORD || "@123456";
export const MYSQLDB_DATABASE = process.env.MYSQLDB_DATABASE || "githubUsersdb";
