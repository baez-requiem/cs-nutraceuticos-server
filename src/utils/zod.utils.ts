import { ZodError } from "zod";
import { CustomError } from "./error.utils";

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