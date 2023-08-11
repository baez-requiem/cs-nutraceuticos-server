/*
  Warnings:

  - You are about to drop the column `payment_type_id` on the `sales_payments` table. All the data in the column will be lost.
  - Added the required column `id_payment_type` to the `sales_payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sales_payments" DROP CONSTRAINT "sales_payments_payment_type_id_fkey";

-- AlterTable
ALTER TABLE "sales_payments" DROP COLUMN "payment_type_id",
ADD COLUMN     "id_payment_type" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "sales_payments" ADD CONSTRAINT "sales_payments_id_payment_type_fkey" FOREIGN KEY ("id_payment_type") REFERENCES "payments_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
