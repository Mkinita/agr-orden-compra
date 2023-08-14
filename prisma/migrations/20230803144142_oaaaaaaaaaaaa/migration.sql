/*
  Warnings:

  - You are about to alter the column `cantidades` on the `nuevasolicitud` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `cantidad01` on the `nuevasolicitud` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `cantidad02` on the `nuevasolicitud` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `cantidad03` on the `nuevasolicitud` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `cantidad04` on the `nuevasolicitud` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `nuevasolicitud` MODIFY `cantidades` VARCHAR(191) NULL,
    MODIFY `cantidad01` VARCHAR(191) NULL,
    MODIFY `cantidad02` VARCHAR(191) NULL,
    MODIFY `cantidad03` VARCHAR(191) NULL,
    MODIFY `cantidad04` VARCHAR(191) NULL;
