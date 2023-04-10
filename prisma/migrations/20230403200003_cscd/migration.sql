-- AlterTable
ALTER TABLE `stock` ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `finalizado` BOOLEAN NOT NULL DEFAULT false;
