import { Router } from "express";
import userController from "../controller/userController";
import jwtAuth from "../middleware/jwtAuth";

const userRoutes = Router();

// missing login with jwt authentication
userRoutes.post("/register", userController.createUser);
userRoutes.post("/login", userController.loginUser)

userRoutes.get("/users", jwtAuth, userController.findAllUsers);
userRoutes.get("/users/:email", jwtAuth, userController.findUserByEmail);
userRoutes.delete("/users/:email", jwtAuth, userController.deleteUser);
userRoutes.put("/users/:email", jwtAuth, userController.updateUser);

export default userRoutes;
