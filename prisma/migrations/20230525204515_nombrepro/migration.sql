/*
  Warnings:

  - You are about to drop the column `nombre` on the `proveedores` table. All the data in the column will be lost.
  - Added the required column `nombreproveedor` to the `Proveedores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `proveedores` DROP COLUMN `nombre`,
    ADD COLUMN `nombreproveedor` VARCHAR(191) NOT NULL;
