/*
  Warnings:

  - You are about to alter the column `cantidad` on the `stock` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `stock` MODIFY `cantidad` VARCHAR(191) NULL;
