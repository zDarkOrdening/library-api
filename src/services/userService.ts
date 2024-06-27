import User from "../models/user";

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
}

export default UserService