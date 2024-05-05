import { Client, columns } from "./columns";
import { DataTable } from "./data-table";
import prisma from "@/lib/db";

async function getData(): Promise<Client[]> {
  const data = await prisma.Clients.findMany();

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default async function ClientsTable() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
