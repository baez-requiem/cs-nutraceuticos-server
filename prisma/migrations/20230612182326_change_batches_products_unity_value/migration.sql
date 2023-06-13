/*
  Warnings:

  - Added the required column `unit_value` to the `batches_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "batches_products" ADD COLUMN     "unit_value" DOUBLE PRECISION NOT NULL;
