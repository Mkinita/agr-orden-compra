/*
  Warnings:

  - You are about to alter the column `cantidades` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `cantidad01` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `orden` MODIFY `cantidades` DOUBLE NOT NULL,
    MODIFY `cantidad01` DOUBLE NOT NULL;