import { client } from '../../prisma/client'
import { CreateRoleSchema, CreateRoleSchemaType } from './createRoleSchema'
import { formatErrorsZod } from '../../utils/zod.utils';

interface IRoleRequest extends CreateRoleSchemaType {}

class CreateRoleUseCase {
  
  async execute(data: IRoleRequest) {

    const validateData = CreateRoleSchema.safeParse(data)

    if (!validateData.success) {
      formatErrorsZod(validateData.error)
      return
    }

    const role = await client.role.create({
      data: validateData.data
    })

    return role
  }
}

export { CreateRoleUseCase }