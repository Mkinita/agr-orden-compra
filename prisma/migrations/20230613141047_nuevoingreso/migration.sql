/*
  Warnings:

  - Added the required column `cantidad01` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detalle01` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor01` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` ADD COLUMN `cantidad01` VARCHAR(191) NOT NULL,
    ADD COLUMN `detalle01` VARCHAR(191) NOT NULL,
    ADD COLUMN `valor01` VARCHAR(191) NOT NULL;
