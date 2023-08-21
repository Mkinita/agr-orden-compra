/*
  Warnings:

  - Added the required column `firma` to the `NuevaSolicitud` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nuevasolicitud` ADD COLUMN `firma` VARCHAR(191) NOT NULL;
