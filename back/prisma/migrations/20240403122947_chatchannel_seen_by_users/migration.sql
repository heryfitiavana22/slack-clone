/*
  Warnings:

  - You are about to drop the column `chatChannelId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_chatChannelId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `chatChannelId`;

-- CreateTable
CREATE TABLE `_seenChatChannel` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_seenChatChannel_AB_unique`(`A`, `B`),
    INDEX `_seenChatChannel_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_seenChatChannel` ADD CONSTRAINT `_seenChatChannel_A_fkey` FOREIGN KEY (`A`) REFERENCES `ChatChannel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_seenChatChannel` ADD CONSTRAINT `_seenChatChannel_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
