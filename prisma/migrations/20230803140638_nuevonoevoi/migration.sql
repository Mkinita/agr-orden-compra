/*
  Warnings:

  - Added the required column `area` to the `NuevaSolicitud` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre01` to the `NuevaSolicitud` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nuevasolicitud` ADD COLUMN `area` VARCHAR(191) NOT NULL,
    ADD COLUMN `compra` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `cotizar` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `nombre01` VARCHAR(191) NOT NULL,
    ADD COLUMN `planta` BOOLEAN NOT NULL DEFAULT false;
