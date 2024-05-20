"use client";

import ClientSelector from "@/components/Orders/ClientSelector";
import { Button, TextInput, NumberInput, InputBase } from "@mantine/core";
import AddArticlesTable from "./addArticlesTable";

export default function AddOrder() {
  return (
    <main className="m-4">
      <ClientSelector />
      <AddArticlesTable />
    </main>
  );
}
