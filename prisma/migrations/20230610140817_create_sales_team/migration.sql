-- AlterTable
ALTER TABLE "users" ADD COLUMN     "salesTeamId" TEXT;

-- CreateTable
CREATE TABLE "sales_team" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "notes" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "sales_team_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_salesTeamId_fkey" FOREIGN KEY ("salesTeamId") REFERENCES "sales_team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
