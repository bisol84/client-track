import { NativeSelect } from "@mantine/core";
import { useEffect, useState } from "react";

export default function ArticleSelector({
  label,
  extraclass,
  onArticleChange,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((response) => response.json())
      .then((articles) => {
        const formattedData = articles.map((article) => ({
          value: article.id,
          label: article.name,
        }));
        setData(formattedData);
      });
  }, []);

  return (
    <NativeSelect
      label={label}
      data={data}
      className="w-full"
      onChange={(event) => onArticleChange(event.currentTarget.value)}
    />
  );
}
