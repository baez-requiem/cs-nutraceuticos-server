import { sign } from "jsonwebtoken"

class GenerateTokenProvider {
  async execute (userId: string) {
    const token = sign({}, process.env.JWT_SECRET_TOKEN!, {
      subject: userId.toString(),
      expiresIn: `${(1500 * 60)}s`
      // expiresIn: `${(15 * 60)}s`
    })

    return token
  }
}

export { GenerateTokenProvider }