/*
  Warnings:

  - Added the required column `fecha` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stock` ADD COLUMN `fecha` VARCHAR(191) NOT NULL;
