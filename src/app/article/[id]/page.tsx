import ArticleEditor from "./articleEditor";

export default function Article({ params }: { params: { id: string } }) {
  return (
    <main className="m-4">
      <ArticleEditor id={params.id} />
    </main>
  );
}
