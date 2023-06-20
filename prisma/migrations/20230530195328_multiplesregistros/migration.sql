/*
  Warnings:

  - You are about to drop the column `cotizacion` on the `orden` table. All the data in the column will be lost.
  - Added the required column `cantidad` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detalle` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `cotizacion`,
    ADD COLUMN `cantidad` VARCHAR(191) NOT NULL,
    ADD COLUMN `detalle` VARCHAR(191) NOT NULL,
    ADD COLUMN `valor` VARCHAR(191) NOT NULL;
