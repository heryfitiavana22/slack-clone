-- AlterTable
ALTER TABLE `User` ADD COLUMN `chatChannelId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_chatChannelId_fkey` FOREIGN KEY (`chatChannelId`) REFERENCES `ChatChannel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
