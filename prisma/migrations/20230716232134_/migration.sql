/*
  Warnings:

  - You are about to drop the column `id_sale_status` on the `sales` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_id_sale_status_fkey";

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "id_sale_status",
ADD COLUMN     "saleStatusId" TEXT;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_saleStatusId_fkey" FOREIGN KEY ("saleStatusId") REFERENCES "sale_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;
