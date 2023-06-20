/*
  Warnings:

  - Added the required column `numerosoli` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` ADD COLUMN `numerosoli` VARCHAR(191) NOT NULL;
