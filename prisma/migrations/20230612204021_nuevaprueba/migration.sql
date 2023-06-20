/*
  Warnings:

  - Added the required column `solicita` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` ADD COLUMN `solicita` VARCHAR(191) NOT NULL;
