-- CreateTable
CREATE TABLE `Equipo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `patente` VARCHAR(191) NOT NULL,
    `chofer` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `kilometraje` DOUBLE NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `faenaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Faena` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orden` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `folio` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `cantidad` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `senores` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `rut` VARCHAR(191) NOT NULL,
    `fono` VARCHAR(191) NOT NULL,
    `comuna` VARCHAR(191) NOT NULL,
    `patente` VARCHAR(191) NOT NULL,
    `pedido` JSON NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT false,
    `finalizado` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Equipo` ADD CONSTRAINT `Equipo_faenaId_fkey` FOREIGN KEY (`faenaId`) REFERENCES `Faena`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
