/*
  Warnings:

  - You are about to alter the column `cantidad02` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `orden` MODIFY `cantidad02` VARCHAR(191) NULL;
