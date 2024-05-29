"use client";

import ArticleCard from "@/components/Articles/ArticleCard";
import useSWR from "swr";

interface Article {
  id: number;
  image: string;
  image_alt: string;
  name: string;
  price: number;
  type: string;
  type_color: string;
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArticleGrid() {
  const { data, error } = useSWR("/api/articles", fetcher);
  if (error) return <div>Erreur</div>;
  if (!data) return <div>Chargement...</div>;

  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {data.map((article: Article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          name={article.name}
          image={article.image}
          image_alt={article.image_alt}
          price={article.price}
          type={article.type}
          type_color={article.type_color}
        ></ArticleCard>
      ))}
    </div>
  );
}
