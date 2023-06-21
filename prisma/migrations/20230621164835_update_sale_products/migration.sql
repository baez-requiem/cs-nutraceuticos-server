/*
  Warnings:

  - Added the required column `sales_quantity` to the `sales_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sales_products" ADD COLUMN     "sales_quantity" INTEGER NOT NULL;
