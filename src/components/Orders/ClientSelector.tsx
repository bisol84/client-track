import { NativeSelect } from "@mantine/core";
import { useEffect, useState } from "react";

export default function ClientSelector() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/clients")
      .then((response) => response.json())
      .then((clients) => {
        const formattedData = clients.map((client) => ({
          value: client.id,
          label:
            client.firstname + " " + client.lastname + " - " + client.address,
        }));
        setData(formattedData);
      });
  }, []);

  return (
    <NativeSelect
      name="client-selector"
      label="Client"
      data={data}
      className="w-full"
    />
  );
}
