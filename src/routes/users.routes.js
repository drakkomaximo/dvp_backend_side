import { Router } from "express";
import {
  searchUsersByName,
  getUserByName,
  selectUserByName,
  getSelectedUsersById,
  deleteSelectUserByName,
} from "../controllers/users.controllers.js";

const router = Router();

router.get("/search/:userName", searchUsersByName);
router.get("/user/:userName", getUserByName);
router.get("/selected-users/:id", getSelectedUsersById);
router.post("/select", selectUserByName);
router.delete("/delete-user/:username", deleteSelectUserByName);

export default router;
