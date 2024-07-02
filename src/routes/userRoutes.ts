import { Router } from "express";
import userController from "../controller/userController";

const userRoutes = Router();

// missing login with jwt authentication
userRoutes.post("/register", userController.createUser);
userRoutes.post("/login")
userRoutes.get("/users", userController.findAllUsers);
userRoutes.get("/users/:email", userController.findUserByEmail);
userRoutes.delete("/users/:email", userController.deleteUser);
userRoutes.put("/users/:email", userController.updateUser);

export default userRoutes;
