import { pool } from "../db.js";
import { axiosInstance } from "../config.js";

export const searchUsersByName = async (req, res) => {
  const { userName } = req.params;

  try {
    const response = await axiosInstance.get(
      `/search/users?q=${userName}&page=1&per_page=10`
    );
    res.status(200).json({
      status: 200,
      data: { ...response.data },
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: "Server Error",
    });
  }
};

export const getUserByName = async (req, res) => {
  const { userName } = req.params;
  try {
    const response = await axiosInstance.get(`/users/${userName}`);
    res.status(200).json({
      status: 200,
      data: { ...response.data },
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: "Server Error",
    });
  }
};

export const getNumberOfFollowersByUsernames = async (req, res) => {
  const { users } = req.params;
  try {
    const formattedUsers = users.split(",");
    const listOfFollowers = await Promise.all(
      formattedUsers.map(async (user) => {
        try {
          const response = await axiosInstance.get(`/users/${user}`);
          if (response.data.followers >= 0 && response.data.login) {
            return {
              followers: response.data.followers,
              username: response.data.login,
            };
          } else {
            return {
              followers: 0,
              username: "No name",
            };
          }
        } catch (error) {
          return {
            followers: 0,
            username: "No name",
          };
        }
      })
    );

    res.status(200).json({
      status: 200,
      data: listOfFollowers,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: "Server Error",
    });
  }
};

export const getSelectedUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    const dbResponse = await pool.query(
      "SELECT * FROM github_users_list WHERE account_id = ?",
      [id]
    );

    if (dbResponse[0].length > 0) {
      const formattedResponse = dbResponse[0].map((user) => ({
        user_avatar: user.user_avatar,
        user_id: user.user_id,
        user_name: user.user_name,
        user_github_link: user.user_github_link,
      }));
      res.json({
        status: 200,
        data: formattedResponse,
      });
    } else {
      res.json({
        status: 200,
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: "Server Error",
    });
  }
};

export const selectUserByName = async (req, res) => {
  const { user, id } = req.body;
  const { avatar, userId, username, githubLink } = user;
  try {
    const dbResponse = await pool.query("SELECT * FROM accounts WHERE id = ?", [
      id,
    ]);

    if (dbResponse[0][0]?.id) {
      const result = await pool.query(
        "SELECT * FROM github_users_list WHERE user_name = ?",
        [username]
      );

      if (result[0].length > 0) {
        return res.status(200).json({
          status: 200,
          data: `The selected user is already in the list.`,
        });
      }

      await pool.query("INSERT INTO github_users_list SET ?", {
        account_id: dbResponse[0][0]?.id,
        user_name: username,
        user_id: userId,
        user_avatar: avatar,
        user_github_link: githubLink,
      });

      res.json({
        status: 200,
        data: "Selection has been saved",
        account_id: dbResponse[0][0]?.id,
        user_name: username,
      });
    } else {
      const dbLength = await pool.query("SELECT * FROM accounts");

      const result = await pool.query("INSERT INTO accounts SET ?", {
        account_name: `auto_account_${dbLength[0].length + 1}`,
      });

      await pool.query("INSERT INTO github_users_list SET ?", {
        account_id: result[0].insertId,
        user_name: username,
        user_id: userId,
        user_avatar: avatar,
        user_github_link: githubLink,
      });

      res.json({
        status: 200,
        data: "Selection has been saved",
        account_id: result[0].insertId,
        user_name: username,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: "Server Error",
    });
  }
};

export const deleteSelectUserByName = async (req, res) => {
  const { username } = req.params;

  try {
    await pool.query("DELETE FROM github_users_list WHERE user_name = ?", [
      username,
    ]);

    res.json({
      status: 200,
      data: "Selection has been deleted",
      user_name: username,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: "Server Error",
    });
  }
};
