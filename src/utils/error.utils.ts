interface ErrorsType {
  field: string
  message: string
}

export class CustomError extends Error {
  public readonly statusCode: number
  public readonly errors: ErrorsType[] = []

  constructor(
    message: string = "Internal Server Error",
    statusCode: number,
    errors?: ErrorsType[]
  ) {
    super(message)
    this.statusCode = statusCode
    this.errors = Array.isArray(errors) ? errors : []
  }
}