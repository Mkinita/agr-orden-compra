/*
  Warnings:

  - Added the required column `valor` to the `Articulo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `articulo` ADD COLUMN `valor` VARCHAR(191) NOT NULL;
