-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "id_sale_status" TEXT;

-- CreateTable
CREATE TABLE "sale_status" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "sale_status_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_id_sale_status_fkey" FOREIGN KEY ("id_sale_status") REFERENCES "sale_status"("id") ON DELETE SET NULL ON UPDATE CASCADE;
