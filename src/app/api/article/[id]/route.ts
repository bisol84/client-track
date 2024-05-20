import prisma from "@/lib/db";
import { parse } from "path";

export async function GET(req: Request, { params }) {
  const articleId = parseInt(params.id);
  try {
    const result = await prisma.Articles.findUnique({
      where: {
        id: articleId,
      },
    });
    return Response.json(result);
  } catch (error) {
    console.error("Erreur lors de la sélection :", error);
    return Response.json(
      { error: "Une erreur est survenue lors de la sélection." },
      { status: 500 },
    );
  }
}
