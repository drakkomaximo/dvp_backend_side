import { pool } from "../db.js";

const createGithubUsersListTableQuery = `
    CREATE TABLE IF NOT EXISTS github_users_list (
      id INT PRIMARY KEY AUTO_INCREMENT,
      account_id INT,
      user_name VARCHAR(100),
      user_id INT,
      user_avatar VARCHAR(100),
      user_github_link VARCHAR(100),
      FOREIGN KEY (account_id) REFERENCES accounts(id)
    )`;

export const createGithubUsersListTableTable = async () => {
  try {
    const connection = await pool.getConnection();
    await connection.query(createGithubUsersListTableQuery)
    connection.release()
    console.log("GithubUsersList table created successfully!");
  } catch (error) {
    console.error("Error creating github_users_list table:", error.message);
  }
};