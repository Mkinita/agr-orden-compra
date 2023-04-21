-- CreateTable
CREATE TABLE `Emp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `espesor` VARCHAR(191) NOT NULL,
    `ancho` VARCHAR(191) NOT NULL,
    `largo` VARCHAR(191) NOT NULL,
    `piezas` VARCHAR(191) NOT NULL,
    `calidad` VARCHAR(191) NOT NULL,
    `cantidad` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
