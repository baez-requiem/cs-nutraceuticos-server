/*
  Warnings:

  - You are about to drop the column `paid` on the `sales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sales" DROP COLUMN "paid";

-- AlterTable
ALTER TABLE "sales_payments" ADD COLUMN     "paid" BOOLEAN NOT NULL DEFAULT false;
