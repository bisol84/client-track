import { AddClientModal } from "./addClientModal";
import ClientTable from "@/components/Clients/ClientTable";
import prisma from "@/lib/db";

async function getData() {
  const data = await prisma.Clients.findMany();

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default async function Clients() {
  const clients = await getData();

  return (
    <main className="m-4">
      <div className="flex justify-end items-end">
        <AddClientModal />
      </div>
      <ClientTable clients={clients} />
    </main>
  );
}
