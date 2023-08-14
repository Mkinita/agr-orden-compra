-- CreateTable
CREATE TABLE `NuevaSolicitud` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `cantidades` DOUBLE NULL,
    `detalles` VARCHAR(191) NULL,
    `valores` VARCHAR(191) NULL,
    `cantidad01` DOUBLE NULL,
    `detalle01` VARCHAR(191) NULL,
    `valor01` VARCHAR(191) NULL,
    `cantidad02` DOUBLE NULL,
    `descripcion02` VARCHAR(191) NULL,
    `valor02` VARCHAR(191) NULL,
    `cantidad03` DOUBLE NULL,
    `descripcion03` VARCHAR(191) NULL,
    `valor03` VARCHAR(191) NULL,
    `cantidad04` DOUBLE NULL,
    `descripcion04` VARCHAR(191) NULL,
    `valor04` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
