import { NativeSelect } from "@mantine/core";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function OptionsSelector({
  onChange,
  selectedArticle,
  index,
  w,
  name,
}) {
  const { data: dataOptions, error: errorOptions } = useSWR(
    selectedArticle.article.name !== ""
      ? `/api/options/${selectedArticle.article.id}`
      : null,
    fetcher,
  );
  console.log("selectedArticle", selectedArticle);

  if (errorOptions) return <div>Erreur</div>;
  if (!dataOptions) return <div>Chargement...</div>;

  const formattedData = dataOptions.map((option) => ({
    value: option.id,
    label: option.name,
    price: option.price,
  }));

  const handleChange = (e) => {
    const selectedOption = dataOptions.find(
      (option) => option.id.toString() === e.target.value,
    );
    if (selectedOption) {
      onChange(index, name, selectedOption);
    }
  };

  return (
    <NativeSelect
      label="Option"
      data={dataOptions.map((option) => ({
        value: option.id,
        label: option.name,
        "data-price": option.price,
      }))}
      className={`w-[${w}]`}
      name={name}
      onChange={handleChange}
    />
  );
}
