import { Router } from "express";
import { searchUsersByName, getUserByName, selectUserByName, getSelectedUsersById } from "../controllers/users.controllers.js";

const router = Router()

router.get('/search/:userName', searchUsersByName)
router.get('/user/:userName', getUserByName)
router.get('/selected-users/:id', getSelectedUsersById)
/* router.get('/users', getUsers) */
/* router.delete('/users', deleteUsers) */
router.post('/select', selectUserByName)

export default router