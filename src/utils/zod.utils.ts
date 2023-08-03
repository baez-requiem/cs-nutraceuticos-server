import { ZodSchema } from "zod"

interface parseSchemaDTOError {
  errors: {
    field: string
    message: string
  }[]
}

export function parseSchemaDTO<T>(schema: ZodSchema<T>, data: unknown): T|parseSchemaDTOError {
  const result = schema.safeParse(data)

  if (result.success) {
    return result.data;
  } 
  
  const errors = [];

  for (const error of result.error.errors) {
    const { path, message } = error

    errors.push({
      field: path.join('.'),
      message: message,
    })
  }

  return { errors }
}