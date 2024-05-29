import { NativeSelect } from "@mantine/core";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ClientSelector() {
  const { data, error } = useSWR("/api/clients", fetcher);

  if (error) return <div>Erreur</div>;
  if (!data) return <div>Chargement...</div>;

  const formattedData = data.map((client) => ({
    value: client.id,
    label: client.firstname + " " + client.lastname + " - " + client.address,
  }));

  return (
    <NativeSelect
      name="client-selector"
      label="Client"
      data={formattedData}
      className="w-full"
    />
  );
}
