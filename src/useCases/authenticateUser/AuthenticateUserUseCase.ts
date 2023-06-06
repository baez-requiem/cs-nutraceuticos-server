import { compare } from 'bcryptjs'
import { client } from "../../prisma/client"
import { GenerateRefreshTokenProvider } from '../../provider/GenerateRefreshTokenProvider'
import { GenerateTokenProvider } from '../../provider/GenerateTokenProvider'

interface IRequest {
  username: string
  password: string
}

class AuthenticateUserUseCase {

  async execute({ username, password }: IRequest) {
    const userAlreadyExists = await client.user.findFirst({
      where: { username }
    })

    if (!userAlreadyExists) {
      throw new Error("Usuário ou senha incorretos")
    }

    const passwordMatch = await compare(password, userAlreadyExists.password)

    if (!passwordMatch) {
      throw new Error("Usuário ou senha incorretos")
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

    return { token, refreshToken }
  }

}

export { AuthenticateUserUseCase }