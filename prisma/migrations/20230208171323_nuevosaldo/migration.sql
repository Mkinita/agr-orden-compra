/*
  Warnings:

  - Added the required column `fecha` to the `Saldo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `saldo` ADD COLUMN `fecha` DATETIME(3) NOT NULL;
