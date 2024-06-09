import { NativeSelect } from "@mantine/core";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArticleSelector({ onChange, index, label, w }) {
  const { data: dataArticle, error: errorArticle } = useSWR(
    `/api/articles/`,
    fetcher,
  );

  if (errorArticle) return <div>Erreur</div>;
  if (!dataArticle) return <div>Chargement...</div>;

  const formattedData = dataArticle.map((article) => ({
    value: article.id,
    label: article.name,
    price: article.price,
  }));

  const handleChange = (e) => {
    const selectedArticle = dataArticle.find(
      (article) => article.id.toString() === e.target.value,
    );
    if (selectedArticle) {
      onChange(index, "article", selectedArticle);
    }
  };

  return (
    <NativeSelect
      label={label}
      data={formattedData}
      className={`w-[${w}]`}
      onChange={handleChange}
    />
  );
}
