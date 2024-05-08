import ArticleCard from "@/components/Articles/ArticleCard";
import prisma from "@/lib/db";

interface Article {
  id: number;
  image: string;
  image_alt: string;
  name: string;
  price: number;
  type: string;
  type_color: string;
}

async function getData() {
  const data = await prisma.Articles.findMany();
  console.log(data);

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default async function Articles() {
  const articles = await getData();

  return (
    <main className="m-4">
      <div className="grid grid-cols-4 gap-4">
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
    </main>
  );
}
