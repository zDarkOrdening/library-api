import User from "../models/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import jwtConfig from "../middleware/jwtConfig";

class UserService {
  async createUser(name: string, email: string, password: string) {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      throw new Error("Already exists an user registered with this email")
    }
    const newUser = await User.create({ name, email, password })
    await newUser.save()
    return newUser
  }

  async findAllUsers() {
    const users = await User.find()
    return users
  }

  async findUserByEmail(email: string) {
    const user = await User.findOne({ email })
    return user
  }

  async deleteUser(email: string) {
    const user = await User.findOneAndDelete({ email })
    return user
  }

  // { new: true } returns the updated document
  async updateUser(email: string, name: string) {
    const user = await User.findOneAndUpdate({ email }, { name }, { new: true })
    return user
  }

  async loginUser(email: string, password: string) {
    const user = await User.findOne({ email }).select("+password")
    if (!user) {
      throw new Error("Invalid email or password")
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      throw new Error("Invalid email or password")
    }
    
    const tokenPayload = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
    const token = jwt.sign(tokenPayload, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn})
    return token
  }
}

export default UserService