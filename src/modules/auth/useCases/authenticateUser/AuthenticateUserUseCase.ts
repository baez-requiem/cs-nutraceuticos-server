import { compare } from 'bcryptjs'
import { client } from "../../../../prisma/client"
import { GenerateRefreshTokenProvider } from '../../../../provider/GenerateRefreshTokenProvider'
import { GenerateTokenProvider } from '../../../../provider/GenerateTokenProvider'
import { AuthenticateUserRequestDTO } from './AuthenticateUserRequestDTO'
import { AuthenticateUserSchema } from './AuthenticateUserSchema'
import { parseSchema } from '../../../../utils/zod.utils'

class AuthenticateUserUseCase {

  async execute(request: AuthenticateUserRequestDTO) {
    const { username, password } = parseSchema(AuthenticateUserSchema, request)

    const userAlreadyExists = await client.user.findFirst({
      where: { username },
      include: { role: true }
    })    

    if (!userAlreadyExists || !userAlreadyExists.active) {
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