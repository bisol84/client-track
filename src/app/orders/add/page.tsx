"use client";

import ClientSelector from "@/components/Orders/ClientSelector";
import AddOrderLineTable from "./addOrderLineTable";
import { Button, Divider } from "@mantine/core";
import ShippingSelector from "@/components/Orders/ShippingSelector";
import { DateInput } from "@mantine/dates";

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
        <div className="flex justify-between w-full">
          <div className="w-3/12">
            <DateInput
              label="Date de la commande"
              placeholder="Date de la commande"
              name="order-date"
            />
          </div>
          <Divider orientation="vertical" />
          <div className="w-3/12">
            <ClientSelector />
          </div>
          <Divider orientation="vertical" />
          <div className="w-3/12">
            <ShippingSelector />
          </div>
        </div>
        <Divider my="md" />
        <AddOrderLineTable />
        <div className="flex content-end justify-end mt-4">
          <Button type="submit">Ajouter la commande</Button>
        </div>
      </form>
    </main>
  );
}
