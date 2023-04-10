-- CreateTable
CREATE TABLE `Saldo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `espesor` DOUBLE NOT NULL,
    `ancho` DOUBLE NOT NULL,
    `largo` DOUBLE NOT NULL,
    `piezas` DOUBLE NOT NULL,
    `calidad` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
