-- CreateTable
CREATE TABLE "Weather" (
    "id" BIGSERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL,
    "temp" DOUBLE PRECISION NOT NULL,
    "tempmax" DOUBLE PRECISION NOT NULL,
    "tempmin" DOUBLE PRECISION NOT NULL,
    "precipprob" DOUBLE PRECISION NOT NULL,
    "windspeed" DOUBLE PRECISION NOT NULL,
    "uvindex" INTEGER NOT NULL,
    "conditions" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Weather_address_datetime_idx" ON "Weather"("address", "datetime");
