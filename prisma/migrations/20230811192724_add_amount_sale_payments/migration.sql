/*
  Warnings:

  - Added the required column `amount` to the `sales_payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sales_payments" ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL;
