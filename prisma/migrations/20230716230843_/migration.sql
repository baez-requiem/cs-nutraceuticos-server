/*
  Warnings:

  - Added the required column `id_sale` to the `logistic_infos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "logistic_infos" ADD COLUMN     "id_sale" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "logistic_infos" ADD CONSTRAINT "logistic_infos_id_sale_fkey" FOREIGN KEY ("id_sale") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
