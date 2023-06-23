-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "id_sale_team" TEXT;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_id_sale_team_fkey" FOREIGN KEY ("id_sale_team") REFERENCES "sales_team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
