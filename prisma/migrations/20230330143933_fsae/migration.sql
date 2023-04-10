-- CreateTable
CREATE TABLE `Pedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,
    `cliente` VARCHAR(191) NOT NULL,
    `oc` VARCHAR(191) NOT NULL,
    `producto` VARCHAR(191) NOT NULL,
    `solicitud` VARCHAR(191) NOT NULL,
    `despacho` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
