/*
  Warnings:

  - A unique constraint covering the columns `[workspaceId,name]` on the table `Channel` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Channel_name_key` ON `Channel`;

-- CreateIndex
CREATE UNIQUE INDEX `Channel_workspaceId_name_key` ON `Channel`(`workspaceId`, `name`);
