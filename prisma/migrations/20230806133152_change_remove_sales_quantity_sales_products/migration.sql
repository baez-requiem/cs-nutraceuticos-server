/*
  Warnings:

  - You are about to drop the column `sales_quantity` on the `sales_products` table. All the data in the column will be lost.
  - Added the required column `sales_quantity` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "sales_quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sales_products" DROP COLUMN "sales_quantity";
