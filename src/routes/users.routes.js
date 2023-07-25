import { Router } from "express";
import {
  searchUsersByName,
  getUserByName,
  selectUserByName,
  getSelectedUsersById,
  deleteSelectUserByName,
  getNumberOfFollowersByUsernames,
} from "../controllers/users.controllers.js";

const router = Router();

router.get("/search/:userName", searchUsersByName);
router.get("/user/:userName", getUserByName);
router.get("/selected-users/:id", getSelectedUsersById);
router.get("/followers/users=:users", getNumberOfFollowersByUsernames);
router.post("/select", selectUserByName);
router.delete("/delete-user/:username", deleteSelectUserByName);

export default router;
