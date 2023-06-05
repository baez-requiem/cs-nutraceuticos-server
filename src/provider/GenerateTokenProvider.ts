import { sign } from "jsonwebtoken"

class GenerateTokenProvider {
  async execute (userId: number) {
    const token = sign({}, "d9781907-36fe-4e5a-b122-b8003c3432e5", {
      subject: userId.toString(),
      expiresIn: "20s"
    })

    return token
  }
}

export { GenerateTokenProvider }