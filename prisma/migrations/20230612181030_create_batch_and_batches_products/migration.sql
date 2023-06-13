-- AlterTable
ALTER TABLE "sales_team" ALTER COLUMN "notes" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "batches" (
    "id" TEXT NOT NULL,
    "note" TEXT,
    "shipping" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "batches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "batches_products" (
    "id" TEXT NOT NULL,
    "id_batch" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "batches_products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "batches_products" ADD CONSTRAINT "batches_products_id_batch_fkey" FOREIGN KEY ("id_batch") REFERENCES "batches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "batches_products" ADD CONSTRAINT "batches_products_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
