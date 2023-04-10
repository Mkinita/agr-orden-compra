/*
  Warnings:

  - Added the required column `cantidad` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stock` ADD COLUMN `cantidad` VARCHAR(191) NOT NULL;
