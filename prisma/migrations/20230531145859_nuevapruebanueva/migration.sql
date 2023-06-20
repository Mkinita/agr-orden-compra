/*
  Warnings:

  - You are about to alter the column `cantidades` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `detalles` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `valores` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `orden` MODIFY `cantidades` JSON NOT NULL,
    MODIFY `detalles` JSON NOT NULL,
    MODIFY `valores` JSON NOT NULL;
