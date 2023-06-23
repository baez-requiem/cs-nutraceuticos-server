/*
  Warnings:

  - You are about to drop the column `id_sale_team` on the `sales` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_id_sale_team_fkey";

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "id_sale_team",
ADD COLUMN     "id_sales_team" TEXT;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_id_sales_team_fkey" FOREIGN KEY ("id_sales_team") REFERENCES "sales_team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
