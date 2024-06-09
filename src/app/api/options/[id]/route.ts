import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }) {
  const articleId = parseInt(params.id);
  try {
    const result = await prisma.Options.findMany({
      where: {
        article_id: articleId,
      },
    });
    console.log("Résultat de la sélection :", result);
    return Response.json(result);
  } catch (error) {
    console.error("Erreur lors de la sélection :", error);
    return Response.json(
      { error: "Une erreur est survenue lors de la sélection." },
      { status: 500 },
    );
  }
}
