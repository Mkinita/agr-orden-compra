/*
  Warnings:

  - You are about to drop the column `chofer` on the `equipo` table. All the data in the column will be lost.
  - You are about to drop the column `imagen` on the `equipo` table. All the data in the column will be lost.
  - You are about to drop the column `kilometraje` on the `equipo` table. All the data in the column will be lost.
  - You are about to drop the column `marca` on the `equipo` table. All the data in the column will be lost.
  - You are about to drop the column `modelo` on the `equipo` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `equipo` table. All the data in the column will be lost.
  - You are about to drop the column `patente` on the `equipo` table. All the data in the column will be lost.
  - You are about to drop the column `cantidad` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `comuna` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `direccion` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `folio` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `fono` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `patente` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `rut` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `senores` on the `orden` table. All the data in the column will be lost.
  - Added the required column `ancho` to the `Equipo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `espesor` to the `Equipo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `largo` to the `Equipo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `piezas` to the `Equipo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `equipo` DROP COLUMN `chofer`,
    DROP COLUMN `imagen`,
    DROP COLUMN `kilometraje`,
    DROP COLUMN `marca`,
    DROP COLUMN `modelo`,
    DROP COLUMN `nombre`,
    DROP COLUMN `patente`,
    ADD COLUMN `ancho` DOUBLE NOT NULL,
    ADD COLUMN `espesor` DOUBLE NOT NULL,
    ADD COLUMN `largo` DOUBLE NOT NULL,
    ADD COLUMN `piezas` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `orden` DROP COLUMN `cantidad`,
    DROP COLUMN `comuna`,
    DROP COLUMN `descripcion`,
    DROP COLUMN `direccion`,
    DROP COLUMN `folio`,
    DROP COLUMN `fono`,
    DROP COLUMN `patente`,
    DROP COLUMN `rut`,
    DROP COLUMN `senores`;
