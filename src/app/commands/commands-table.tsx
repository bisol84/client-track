import { Commands, columns } from "./columns";
import { DataTable } from "./data-table";
import prisma from "@/lib/db";

async function getData(): Promise<Commands[]> {
  const data = await prisma.Commands.findMany();

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default async function CommandsTable() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
