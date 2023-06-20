/*
  Warnings:

  - You are about to drop the column `cantidad` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `detalle` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `orden` table. All the data in the column will be lost.
  - Added the required column `cantidades` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detalles` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valores` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `cantidad`,
    DROP COLUMN `detalle`,
    DROP COLUMN `valor`,
    ADD COLUMN `cantidades` VARCHAR(191) NOT NULL,
    ADD COLUMN `detalles` VARCHAR(191) NOT NULL,
    ADD COLUMN `valores` VARCHAR(191) NOT NULL;
