/*
  Warnings:

  - You are about to drop the column `volumen` on the `orden` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `volumen`;

-- AlterTable
ALTER TABLE `pedidos` ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `finalizado` BOOLEAN NOT NULL DEFAULT false;
