import { Request, Response } from 'express'

import { CreateUserUseCase } from '../useCases/createUser/CreateUserUseCase'
import { UpdateUserUseCase } from '../useCases/updateUser/UpdateUserUseCase'
import { GetUsersUseCase } from '../useCases/getUsers/GetUsersUseCase'
import { DeleteUserUseCase } from '../useCases/deleteUser/DeleteUserUseCase'

class UserController {
  async createUserHandle(request: Request, response: Response) {
    const data = request.body

    const createUserUseCase = new CreateUserUseCase()

    const user = await createUserUseCase.execute(data)

    return response.json(user)
  }

  async updateUserHandle(request: Request, response: Response) {
    const data = request.body

    const updateUserUseCase = new UpdateUserUseCase()

    const user = await updateUserUseCase.execute(data)

    return response.json(user)
  }

  async deleteUserHandle(request: Request, response: Response) {
    const { id } = request.body

    const deleteUserUseCase = new DeleteUserUseCase()

    const status = await deleteUserUseCase.execute({ id })

    return response.json(status)
  }

  async getUsersHandle(_request: Request, response: Response) {
    const getUsersUseCase = new GetUsersUseCase()

    const users = await getUsersUseCase.execute()

    return response.json(users)
  }
}

export { UserController }