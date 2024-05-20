"use client";

import ClientSelector from "@/components/Orders/ClientSelector";
import AddOrderLineTable from "./addOrderLineTable";

export default function AddOrder() {
  return (
    <main className="m-4">
      <ClientSelector />
      <AddOrderLineTable />
    </main>
  );
}
