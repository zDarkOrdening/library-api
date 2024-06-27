import { Router } from "express";
import { createUser, findAllUsers, findUserByEmail } from "./controller/userController";

const routes = Router()

routes.get("/users", findAllUsers)
routes.get("/user/:id", findUserByEmail)
routes.post("/user", createUser)

export default routes