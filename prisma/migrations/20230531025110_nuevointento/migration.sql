/*
  Warnings:

  - You are about to drop the column `proveedores` on the `orden` table. All the data in the column will be lost.
  - Added the required column `pedido01` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `proveedores`,
    ADD COLUMN `pedido01` JSON NOT NULL;
