import { compare } from 'bcryptjs'
import { client } from "../../../../prisma/client"
import { GenerateRefreshTokenProvider } from '../../../../provider/GenerateRefreshTokenProvider'
import { GenerateTokenProvider } from '../../../../provider/GenerateTokenProvider'
import { AuthenticateUserRequestDTO } from './AuthenticateUserRequestDTO'

class AuthenticateUserUseCase {

  async execute({ username, password }: AuthenticateUserRequestDTO) {

    const userAlreadyExists = await client.user.findFirst({
      where: {
        username,
        active: true,
        deleted: false
      },
      include: { role: true }
    })    

    if (!userAlreadyExists) {
      throw new Error("Incorrect username or password")
    }

    const passwordMatch = await compare(password, userAlreadyExists.password)

    if (!passwordMatch) {
      throw new Error("Incorrect username or password")
    }
    
    const generateTokenProvider = new GenerateTokenProvider()
    const token = await generateTokenProvider.execute(userAlreadyExists.id)

    await client.refreshToken.deleteMany({
      where: {
        userId: userAlreadyExists.id
      }
    })

    const generateRefreshToken = new GenerateRefreshTokenProvider()
    const refreshToken = await generateRefreshToken.execute(userAlreadyExists.id)

    const result = {
      token,
      refreshToken,
      user: {
        id: userAlreadyExists.id,
        name: userAlreadyExists.name,
        role: userAlreadyExists.role?.name
      }
    }

    return result
  }

}

export { AuthenticateUserUseCase }