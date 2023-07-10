import { z, ZodError, ZodSchema } from "zod";
import { CustomError } from "./error.utils";

export function parseSchema<T>(schema: ZodSchema<T>, data: unknown): T {
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

  throw new CustomError('Dados inválidos', 400, errors)
}

export function formatErrorsZod(zodError: ZodError, hasThrowError = true) {
  const errors = [];

  for (const error of zodError.errors) {
    const { path, message } = error;

    errors.push({
      field: path.join('.'),
      message: message,
    });
  }

  if (hasThrowError) {
    throw new CustomError('Dados inválidos', 400, errors)
  }

  return errors;
}