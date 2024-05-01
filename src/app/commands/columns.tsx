"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  fullname: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "fullname",
    header: "Nom/Prénom",
  },
  {
    accessorKey: "article",
    header: "Article",
  },
  {
    accessorKey: "size-options",
    header: "Taille/Options",
  },
  {
    accessorKey: "detail",
    header: "Détail",
  },
  {
    accessorKey: "quantity",
    header: "Quantité",
  },
  {
    accessorKey: "price-one",
    header: "Prix (unité)",
  },
  {
    accessorKey: "price-total",
    header: "Prix (total)",
  },
];
