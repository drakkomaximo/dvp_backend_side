import { createAccountsTable } from "./accountsTable.js";
import { createGithubUsersListTableTable } from "./githubUsersListTable.js";

export const main = async () => {
  try {
    await createAccountsTable();
    await createGithubUsersListTableTable();
    // Puedes realizar otras operaciones con las tablas aquí
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    // Cierra la conexión al finalizar
  }
};
