declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      JWT_SECRET_TOKEN: string
    }
  }
}

export {}