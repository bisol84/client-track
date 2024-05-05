-- CreateTable
CREATE TABLE "Articles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "image" TEXT,
    "image_alt" TEXT,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Options" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "article_id" INTEGER NOT NULL,

    CONSTRAINT "Options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clients" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "npa" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "locality" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commands" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "comment" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "npa" INTEGER NOT NULL,
    "locality" TEXT NOT NULL,
    "article" TEXT NOT NULL,
    "article_price" DOUBLE PRECISION NOT NULL,
    "article_quantity" INTEGER NOT NULL,
    "options" TEXT NOT NULL,
    "options_price" DOUBLE PRECISION NOT NULL,
    "options_quantity" INTEGER NOT NULL,
    "shipping_method" TEXT NOT NULL,
    "shipping_price" DOUBLE PRECISION NOT NULL,
    "shipping_date" TIMESTAMP(3) NOT NULL,
    "billed" BOOLEAN NOT NULL DEFAULT false,
    "billed_method" TEXT NOT NULL,
    "billed_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commands_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
