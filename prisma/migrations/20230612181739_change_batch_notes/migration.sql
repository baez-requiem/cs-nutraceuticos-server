/*
  Warnings:

  - You are about to drop the column `note` on the `batches` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "batches" DROP COLUMN "note",
ADD COLUMN     "notes" TEXT;
