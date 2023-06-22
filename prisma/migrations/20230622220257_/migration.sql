/*
  Warnings:

  - Added the required column `id_user` to the `batches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `misplacements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "batches" ADD COLUMN     "id_user" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "misplacements" ADD COLUMN     "id_user" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "id_user" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "batches" ADD CONSTRAINT "batches_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "misplacements" ADD CONSTRAINT "misplacements_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
