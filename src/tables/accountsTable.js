import { pool } from "../db.js";

const createAccountsTableQuery = `
    CREATE TABLE IF NOT EXISTS accounts (
      id INT PRIMARY KEY AUTO_INCREMENT,
      account_name VARCHAR(50)
    )`;

export const createAccountsTable = async () => {
  try {
    const connection = await pool.getConnection();
    await connection.query(createAccountsTableQuery)
    connection.release()
    console.log('Accounts table created successfully!');
  } catch (error) {
    console.error('Error creating accounts table:', error.message);
  }
}