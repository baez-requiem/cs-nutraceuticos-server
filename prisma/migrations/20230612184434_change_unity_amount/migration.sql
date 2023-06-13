/*
  Warnings:

  - You are about to drop the column `unit_value` on the `batches_products` table. All the data in the column will be lost.
  - Added the required column `unit_amount` to the `batches_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "batches_products" DROP COLUMN "unit_value",
ADD COLUMN     "unit_amount" DOUBLE PRECISION NOT NULL;
