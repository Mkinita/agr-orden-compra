/*
  Warnings:

  - Added the required column `atencion` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cotizacion` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` ADD COLUMN `atencion` VARCHAR(191) NOT NULL,
    ADD COLUMN `cantidad02` DOUBLE NULL,
    ADD COLUMN `cantidad03` DOUBLE NULL,
    ADD COLUMN `cantidad04` DOUBLE NULL,
    ADD COLUMN `cantidad05` DOUBLE NULL,
    ADD COLUMN `cantidad06` DOUBLE NULL,
    ADD COLUMN `cantidad07` DOUBLE NULL,
    ADD COLUMN `cantidad08` DOUBLE NULL,
    ADD COLUMN `cantidad09` DOUBLE NULL,
    ADD COLUMN `cotizacion` VARCHAR(191) NOT NULL,
    ADD COLUMN `descripcion02` VARCHAR(191) NULL,
    ADD COLUMN `descripcion03` VARCHAR(191) NULL,
    ADD COLUMN `descripcion04` VARCHAR(191) NULL,
    ADD COLUMN `descripcion05` VARCHAR(191) NULL,
    ADD COLUMN `descripcion06` VARCHAR(191) NULL,
    ADD COLUMN `descripcion07` VARCHAR(191) NULL,
    ADD COLUMN `descripcion08` VARCHAR(191) NULL,
    ADD COLUMN `descripcion09` VARCHAR(191) NULL,
    ADD COLUMN `valor02` VARCHAR(191) NULL,
    ADD COLUMN `valor03` VARCHAR(191) NULL,
    ADD COLUMN `valor04` VARCHAR(191) NULL,
    ADD COLUMN `valor05` VARCHAR(191) NULL,
    ADD COLUMN `valor06` VARCHAR(191) NULL,
    ADD COLUMN `valor07` VARCHAR(191) NULL,
    ADD COLUMN `valor08` VARCHAR(191) NULL,
    ADD COLUMN `valor09` VARCHAR(191) NULL;
