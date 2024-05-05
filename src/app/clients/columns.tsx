"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Client = {
  firstname: string;
  lastname: string;
  address: string;
  npa: number;
  locality: string;
  phone: string;
  email: string;
};

export const columns: ColumnDef<Client>[] = [
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
    header: "Localtié",
  },
  {
    accessorKey: "phone",
    header: "Téléphone",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
];
