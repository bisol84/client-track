import { NativeSelect } from "@mantine/core";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArticleSelector({ onChange, label, w }) {
  const { data: dataArticle, error: errorArticle } = useSWR(
    `/api/articles/`,
    fetcher,
  );

  if (errorArticle) return <div>Erreur</div>;
  if (!dataArticle) return <div>Chargement...</div>;

  const formattedData = dataArticle.map((article) => ({
    value: article.id,
    label: article.name,
  }));

  return (
    <NativeSelect
      label={label}
      data={formattedData}
      className={`w-[${w}]`}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
