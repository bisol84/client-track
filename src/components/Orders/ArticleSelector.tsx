import { NativeSelect } from "@mantine/core";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArticleSelector({ onChange, label, w }) {
  const { data, error } = useSWR("/api/articles", fetcher);
  if (!data) return <div>Chargement...</div>;
  if (error) return <div>Erreur</div>;

  const formattedData = data.map((article) => ({
    value: article.id,
    label: article.type + " " + article.name,
  }));
  const dataWithEmptyOption = [
    { value: "", label: "Sélectionnez un article" },
    ...formattedData,
  ];

  return (
    <NativeSelect
      label={label}
      data={dataWithEmptyOption}
      className={`w-[${w}]`}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
