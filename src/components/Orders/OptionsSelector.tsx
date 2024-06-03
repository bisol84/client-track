import { NativeSelect } from "@mantine/core";
import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function OptionsSelector({ onChange, articleID }) {
  const [formattedData, setFormattedData] = useState([
    { value: "", label: "Sélectionnez une option" },
  ]);
  const { data, error } = useSWR(`/api/options/${articleID}`, fetcher);

  useEffect(() => {
    if (data && data.length > 0) {
      const formattedOptions = data.map((option) => ({
        value: option.id,
        label: option.name,
      }));
      setFormattedData(formattedOptions);
    }
  }, [data]);

  if (!data) return <div>Chargement...</div>;
  if (error) return <div>Erreur</div>;

  return (
    <NativeSelect
      label=""
      data={formattedData}
      className="w-full"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
