-- AlterTable
ALTER TABLE "Articles" ADD COLUMN     "image_alt" TEXT DEFAULT '',
ALTER COLUMN "image" DROP NOT NULL;
