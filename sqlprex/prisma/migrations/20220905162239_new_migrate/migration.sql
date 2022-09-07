/*
  Warnings:

  - A unique constraint covering the columns `[car_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[brand_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_brand_id_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_car_id_fkey`;

-- AlterTable
ALTER TABLE `Car` ADD COLUMN `brandId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_car_id_key` ON `User`(`car_id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_brand_id_key` ON `User`(`brand_id`);

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `Brand`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
