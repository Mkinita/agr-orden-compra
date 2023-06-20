/*
  Warnings:

  - Added the required column `area` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` ADD COLUMN `area` VARCHAR(191) NOT NULL,
    ADD COLUMN `planta` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `solicitud` ADD COLUMN `planta` BOOLEAN NOT NULL DEFAULT false;
