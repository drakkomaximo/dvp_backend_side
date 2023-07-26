import { createAccountsTable } from "./accountsTable.js";
import { createGithubUsersListTableTable } from "./githubUsersListTable.js";

export const main = async () => {
  try {
    await createAccountsTable();
    await createGithubUsersListTableTable();
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
  }
};