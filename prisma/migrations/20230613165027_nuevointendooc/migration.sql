/*
  Warnings:

  - Made the column `cantidad02` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cantidad03` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cantidad04` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cantidad05` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cantidad06` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cantidad07` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cantidad08` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cantidad09` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripcion02` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripcion03` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripcion04` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripcion05` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripcion06` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripcion07` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripcion08` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripcion09` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valor02` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valor03` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valor04` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valor05` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valor06` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valor07` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valor08` on table `orden` required. This step will fail if there are existing NULL values in that column.
  - Made the column `valor09` on table `orden` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `orden` MODIFY `cantidad02` DOUBLE NOT NULL,
    MODIFY `cantidad03` DOUBLE NOT NULL,
    MODIFY `cantidad04` DOUBLE NOT NULL,
    MODIFY `cantidad05` DOUBLE NOT NULL,
    MODIFY `cantidad06` DOUBLE NOT NULL,
    MODIFY `cantidad07` DOUBLE NOT NULL,
    MODIFY `cantidad08` DOUBLE NOT NULL,
    MODIFY `cantidad09` DOUBLE NOT NULL,
    MODIFY `descripcion02` VARCHAR(191) NOT NULL,
    MODIFY `descripcion03` VARCHAR(191) NOT NULL,
    MODIFY `descripcion04` VARCHAR(191) NOT NULL,
    MODIFY `descripcion05` VARCHAR(191) NOT NULL,
    MODIFY `descripcion06` VARCHAR(191) NOT NULL,
    MODIFY `descripcion07` VARCHAR(191) NOT NULL,
    MODIFY `descripcion08` VARCHAR(191) NOT NULL,
    MODIFY `descripcion09` VARCHAR(191) NOT NULL,
    MODIFY `valor02` VARCHAR(191) NOT NULL,
    MODIFY `valor03` VARCHAR(191) NOT NULL,
    MODIFY `valor04` VARCHAR(191) NOT NULL,
    MODIFY `valor05` VARCHAR(191) NOT NULL,
    MODIFY `valor06` VARCHAR(191) NOT NULL,
    MODIFY `valor07` VARCHAR(191) NOT NULL,
    MODIFY `valor08` VARCHAR(191) NOT NULL,
    MODIFY `valor09` VARCHAR(191) NOT NULL;
