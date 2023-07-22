import { Router } from "express";
import { deleteUsers, searchUsersByName, getUserByName, postUsers, putUsers } from "../controllers/users.controllers.js";

const router = Router()

router.get('/search/:userName', searchUsersByName)
router.get('/user/:userName', getUserByName)
/* router.get('/users', getUsers) */
router.post('/users', postUsers)
router.put('/users', putUsers)
router.delete('/users', deleteUsers)

export default router