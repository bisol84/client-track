import { NativeSelect } from "@mantine/core";

export default function QuantitySelector({ onChange, index, field, value }) {
  const formattedData = Array.from({ length: 11 }, (_, i) => ({
    value: i,
    label: i.toString(),
  }));

  return (
    <NativeSelect
      label="Quantité"
      data={formattedData}
      value={value}
      onChange={(e) => onChange(index, field, e.target.value)}
      className="w-20"
    />
  );
}
