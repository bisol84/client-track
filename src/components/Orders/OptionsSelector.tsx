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

  if (errorOptions) return <div>Erreur</div>;
  if (!dataOptions)
    return (
      <div>
        <NativeSelect
          label="Option"
          data=""
          className={`w-[${w}]`}
          name={name}
          disabled
        />
      </div>
    );

  const formattedData = [
    { value: "", label: "Sélectionner une option", "data-price": "" },
    ...dataOptions.map((option) => ({
      value: option.id,
      label: option.name,
      "data-price": option.price,
    })),
  ];

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
      data={formattedData}
      className={`w-[${w}]`}
      name={name}
      onChange={handleChange}
    />
  );
}
