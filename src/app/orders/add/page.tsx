"use client";

import ClientSelector from "@/components/Orders/ClientSelector";
import AddOrderLineTable from "./addOrderLineTable";
import { Button } from "@mantine/core";

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/orders/", {
    method: "POST",
    body: formData,
  });
}

export default function AddOrder() {
  return (
    <main className="m-4">
      <form name="addOrder" onSubmit={onSubmit}>
        <ClientSelector />
        <AddOrderLineTable />
        <div className="flex content-end justify-end mt-4">
          <Button type="submit">Ajouter la commande</Button>
        </div>
      </form>
    </main>
  );
}
