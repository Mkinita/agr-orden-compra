/*
  Warnings:

  - You are about to alter the column `espesor` on the `saldo` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `ancho` on the `saldo` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `largo` on the `saldo` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `piezas` on the `saldo` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `saldo` MODIFY `espesor` VARCHAR(191) NOT NULL,
    MODIFY `ancho` VARCHAR(191) NOT NULL,
    MODIFY `largo` VARCHAR(191) NOT NULL,
    MODIFY `piezas` VARCHAR(191) NOT NULL;
