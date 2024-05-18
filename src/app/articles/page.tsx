import { AddArticleModal } from "./addArticleModal";
import ArticleGrid from "./articleGrid";

export default function Articles() {
  return (
    <main className="m-4">
      <div className="flex justify-end items-end">
        <AddArticleModal />
      </div>
      <ArticleGrid />
    </main>
  );
}
