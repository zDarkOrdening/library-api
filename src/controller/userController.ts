import { Request, Response } from 'express'
import UserService from '../services/userService'

const service = new UserService()

async function createUser(req: Request, res: Response) {
  const { name, email, password } = req.body
  try {
    const user = await service.createUser(name, email, password)
    return res.status(201).json(user)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    process.exit(1)
  }
}

async function findAllUsers(req: Request, res: Response) {
  try {

    const users = await service.findAllUsers()
    return res.status(200).json(users)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    process.exit(1)
  }
}

async function findUserByEmail(req: Request, res: Response) {
  try {
    const { id } = req.params
    const user = await service.findUserByEmail(id)
    return res.status(200).json(user)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
    process.exit(1)
  }
}


export { createUser, findAllUsers, findUserByEmail }
