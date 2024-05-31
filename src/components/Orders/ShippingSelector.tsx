import { NativeSelect } from "@mantine/core";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ShippingSelector() {
  const { data, error } = useSWR("/api/shipping", fetcher);

  if (error) return <div>Erreur</div>;
  if (!data) return <div>Chargement...</div>;

  const formattedData = data.map((shipping) => ({
    value: shipping.price,
    label: shipping.name,
  }));
  const dataWithEmptyOption = [
    { value: "", label: "Sélectionnez une méthode d'envoi" },
    ...formattedData,
  ];

  return (
    <NativeSelect
      label="Méthode d'envoi"
      name="shipping-selector"
      data={dataWithEmptyOption}
      className="w-full"
    />
  );
}
