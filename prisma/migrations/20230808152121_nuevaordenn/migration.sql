-- CreateTable
CREATE TABLE `Nuevaorden` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `cotizacion` VARCHAR(191) NOT NULL,
    `atencion` VARCHAR(191) NOT NULL,
    `pago` VARCHAR(191) NULL,
    `pedido` JSON NOT NULL,
    `pedido01` JSON NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT false,
    `planta` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
