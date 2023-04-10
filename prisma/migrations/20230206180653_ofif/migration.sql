/*
  Warnings:

  - Added the required column `detalle` to the `Equipo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `equipo` ADD COLUMN `detalle` VARCHAR(191) NOT NULL;
