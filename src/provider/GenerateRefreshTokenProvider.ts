import dayjs from 'dayjs'

import { client } from "../prisma/client"

class GenerateRefreshTokenProvider {
  async execute(userId: number) {
    const expiresIn = dayjs().add(15, "s").unix()

    const generateRefreshToken = await client.refreshToken.create({
      data: {
        userId,
        expiresIn
      }
    })

    return generateRefreshToken
  }
}

export { GenerateRefreshTokenProvider }