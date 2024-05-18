"use client";

import ArticleCard from "@/components/Articles/ArticleCard";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  image: string;
  image_alt: string;
  name: string;
  price: number;
  type: string;
  type_color: string;
}

export default function ArticleGrid() {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    const response = await fetch("/api/articles");
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {articles.map((article: Article) => (
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
