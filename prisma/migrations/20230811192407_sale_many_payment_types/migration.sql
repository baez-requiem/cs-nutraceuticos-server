/*
  Warnings:

  - You are about to drop the column `card_installments` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `payment_type_id` on the `sales` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_payment_type_id_fkey";

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "card_installments",
DROP COLUMN "payment_type_id";

-- CreateTable
CREATE TABLE "sales_payments" (
    "id" TEXT NOT NULL,
    "id_sale" TEXT NOT NULL,
    "payment_type_id" TEXT NOT NULL,
    "card_installments" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sales_payments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sales_payments" ADD CONSTRAINT "sales_payments_id_sale_fkey" FOREIGN KEY ("id_sale") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_payments" ADD CONSTRAINT "sales_payments_payment_type_id_fkey" FOREIGN KEY ("payment_type_id") REFERENCES "payments_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
