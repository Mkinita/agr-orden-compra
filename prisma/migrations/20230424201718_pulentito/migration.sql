-- CreateTable
CREATE TABLE `Producciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `volumen` VARCHAR(191) NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
