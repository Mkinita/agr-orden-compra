/*
  Warnings:

  - You are about to drop the column `horasmes` on the `horasseco` table. All the data in the column will be lost.
  - You are about to drop the column `horastrabajadas` on the `horasseco` table. All the data in the column will be lost.
  - Added the required column `horasmesseco` to the `Horasseco` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `horasseco` DROP COLUMN `horasmes`,
    DROP COLUMN `horastrabajadas`,
    ADD COLUMN `horasmesseco` VARCHAR(191) NOT NULL,
    ADD COLUMN `horastrabajadasseco` VARCHAR(191) NULL;
