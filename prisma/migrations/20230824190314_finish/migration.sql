/*
  Warnings:

  - You are about to drop the `batches` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `batches_products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `misplacement_products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `misplacements` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `order` to the `sale_status` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Operation" AS ENUM ('IN', 'OUT', 'TRANSFER_IN', 'TRANSFER_OUT');

-- DropForeignKey
ALTER TABLE "batches" DROP CONSTRAINT "batches_id_user_fkey";

-- DropForeignKey
ALTER TABLE "batches_products" DROP CONSTRAINT "batches_products_id_batch_fkey";

-- DropForeignKey
ALTER TABLE "batches_products" DROP CONSTRAINT "batches_products_id_product_fkey";

-- DropForeignKey
ALTER TABLE "misplacement_products" DROP CONSTRAINT "misplacement_products_id_misplacement_fkey";

-- DropForeignKey
ALTER TABLE "misplacement_products" DROP CONSTRAINT "misplacement_products_id_product_fkey";

-- DropForeignKey
ALTER TABLE "misplacements" DROP CONSTRAINT "misplacements_id_user_fkey";

-- AlterTable
ALTER TABLE "logistic_infos" ADD COLUMN     "current" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "sale_status" ADD COLUMN     "order" INTEGER NOT NULL;

-- DropTable
DROP TABLE "batches";

-- DropTable
DROP TABLE "batches_products";

-- DropTable
DROP TABLE "misplacement_products";

-- DropTable
DROP TABLE "misplacements";

-- CreateTable
CREATE TABLE "distribution_centers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id_motoboy" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "distribution_centers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distribution_center_movements" (
    "id" TEXT NOT NULL,
    "operation" "Operation" NOT NULL,
    "id_distribution_center" TEXT NOT NULL,
    "id_distribution_center_rel" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "distribution_center_movements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distribution_center__products_movement" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_distribution_center_movement" TEXT NOT NULL,

    CONSTRAINT "distribution_center__products_movement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distribution_center_supply_quantity_notice" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_distribution_center" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "distribution_center_supply_quantity_notice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "distribution_centers" ADD CONSTRAINT "distribution_centers_id_motoboy_fkey" FOREIGN KEY ("id_motoboy") REFERENCES "motoboy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distribution_center_movements" ADD CONSTRAINT "distribution_center_movements_id_distribution_center_fkey" FOREIGN KEY ("id_distribution_center") REFERENCES "distribution_centers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distribution_center_movements" ADD CONSTRAINT "distribution_center_movements_id_distribution_center_rel_fkey" FOREIGN KEY ("id_distribution_center_rel") REFERENCES "distribution_centers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distribution_center__products_movement" ADD CONSTRAINT "distribution_center__products_movement_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distribution_center__products_movement" ADD CONSTRAINT "distribution_center__products_movement_id_distribution_cen_fkey" FOREIGN KEY ("id_distribution_center_movement") REFERENCES "distribution_center_movements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distribution_center_supply_quantity_notice" ADD CONSTRAINT "distribution_center_supply_quantity_notice_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distribution_center_supply_quantity_notice" ADD CONSTRAINT "distribution_center_supply_quantity_notice_id_distribution_fkey" FOREIGN KEY ("id_distribution_center") REFERENCES "distribution_centers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
