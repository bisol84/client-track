"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Commands = {
  date: Date;
  firstname: string;
  lastname: string;
  address: string;
  npa: number;
  locality: string;
  article: string;
  options: string;
  article_quantity: string;
  options_quantity: string;
  shipping_method: string;
  shipping_date: Date;
  price_one: number;
  price_total: number;
};

export const columns: ColumnDef<Commands>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "firstname",
    header: "Prénom",
  },
  {
    accessorKey: "lastname",
    header: "Nom",
  },
  {
    accessorKey: "address",
    header: "Adresse",
  },
  {
    accessorKey: "npa",
    header: "NPA",
  },
  {
    accessorKey: "locality",
    header: "Localité",
  },
  {
    accessorKey: "article",
    header: "Article",
  },
  {
    accessorKey: "article_quantity",
    header: "Quantité",
  },
  {
    accessorKey: "options",
    header: "Taille/Options",
  },
  {
    accessorKey: "options_quantity",
    header: "Quantité",
  },
  {
    accessorKey: "shipping_method",
    header: "Méthode d'envoi",
  },
  {
    accessorKey: "shipping_date",
    header: "Date d'envoi",
  },
  {
    accessorKey: "price_one",
    header: "Prix (unité)",
  },
  {
    accessorKey: "price_total",
    header: "Prix (total)",
  },
];
