import { Commands, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Commands[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      fullname: "pending",
    },
    // ...
  ];
}

export default async function CommandsTable() {
  const data = await getData();

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
