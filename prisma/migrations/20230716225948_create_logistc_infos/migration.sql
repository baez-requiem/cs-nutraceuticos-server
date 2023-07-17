-- CreateTable
CREATE TABLE "delivery_type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "delivery_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "motoboy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "motoboy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logistic_infos" (
    "id" TEXT NOT NULL,
    "id_sale_status" TEXT NOT NULL,
    "delivery_value" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "id_delivery_type" TEXT,
    "delivery_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "id_motoboy" TEXT,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logistic_infos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "logistic_infos" ADD CONSTRAINT "logistic_infos_id_sale_status_fkey" FOREIGN KEY ("id_sale_status") REFERENCES "sale_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logistic_infos" ADD CONSTRAINT "logistic_infos_id_delivery_type_fkey" FOREIGN KEY ("id_delivery_type") REFERENCES "delivery_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logistic_infos" ADD CONSTRAINT "logistic_infos_id_motoboy_fkey" FOREIGN KEY ("id_motoboy") REFERENCES "motoboy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
