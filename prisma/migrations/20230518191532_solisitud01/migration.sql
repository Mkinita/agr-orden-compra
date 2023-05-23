/*
  Warnings:

  - You are about to drop the column `nombre` on the `solicitud` table. All the data in the column will be lost.
  - Added the required column `nombre01` to the `Solicitud` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `solicitud` DROP COLUMN `nombre`,
    ADD COLUMN `nombre01` VARCHAR(191) NOT NULL;
