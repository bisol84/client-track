/*
  Warnings:

  - Added the required column `image` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articles" ADD COLUMN     "image" TEXT NOT NULL;
