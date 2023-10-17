-- AlterTable
ALTER TABLE `nuevasolicitud` ADD COLUMN `anular` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `visto` BOOLEAN NOT NULL DEFAULT false;
