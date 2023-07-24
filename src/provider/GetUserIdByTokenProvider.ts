import { verify } from "jsonwebtoken"

class GetUserIdByTokenProvider {
  async execute(authToken: string) {
    const [_, token] = authToken.split(" ")

    const decoded = verify(token, process.env.JWT_SECRET_TOKEN!)

    const userId = typeof decoded.sub == 'string'
      ? decoded.sub
      : decoded.sub?.()

    if (!userId) {
      throw new Error('Invalid token')
    }

    return userId
  }
}

export { GetUserIdByTokenProvider }