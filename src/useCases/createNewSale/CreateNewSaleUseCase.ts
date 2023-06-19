import { client } from '../../prisma/client'
import { formatErrorsZod } from '../../utils/zod.utils'
import { CreateNewSaleSchema, CreateNewSaleSchemaType } from './createNewSaleSchema'

interface INewSaleRequest extends CreateNewSaleSchemaType {}

class CreateNewSaleUseCase {

    async execute(data: INewSaleRequest) {
        const validateData = CreateNewSaleSchema.safeParse(data)

        if (!validateData.success) {
            formatErrorsZod(validateData.error)
            return
        }

        const validData = validateData.data
    }
}

export { CreateNewSaleUseCase }