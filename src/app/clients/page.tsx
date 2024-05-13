import { AddClientModal } from "./addClientModal";
import getClients from "./data";
import ClientTable from "@/components/Clients/ClientTable";

export default async function Clients() {
  const clients = await getClients();

  return (
    <main className="m-4">
      <div className="flex justify-end items-end">
        <AddClientModal />
      </div>
      <ClientTable clients={clients} />
    </main>
  );
}
