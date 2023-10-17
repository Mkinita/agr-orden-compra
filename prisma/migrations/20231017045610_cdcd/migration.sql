-- AlterTable
ALTER TABLE `nuevaorden` ADD COLUMN `anular` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `proveedor` BOOLEAN NOT NULL DEFAULT false;
