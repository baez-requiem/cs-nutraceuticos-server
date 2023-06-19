-- CreateTable
CREATE TABLE "payments_type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "rg" TEXT,
    "cpf" TEXT,
    "email" TEXT,
    "cep" TEXT,
    "state" TEXT,
    "city" TEXT,
    "neighborhood" TEXT,
    "address" TEXT,
    "complement" TEXT,
    "media_id" TEXT NOT NULL,
    "payment_type_id" TEXT NOT NULL,
    "discounts" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "notes" TEXT,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales_products" (
    "id" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_sale" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sales_products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "medias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_payment_type_id_fkey" FOREIGN KEY ("payment_type_id") REFERENCES "payments_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_products" ADD CONSTRAINT "sales_products_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_products" ADD CONSTRAINT "sales_products_id_sale_fkey" FOREIGN KEY ("id_sale") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
