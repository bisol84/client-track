import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.formData();
    const name = data.get("name");
    const file = data.get("image");

    const buffer = Buffer.from(await file.arrayBuffer());

    // Replace spaces in the file name with underscores
    const filename = name + "-" + file.name.replaceAll(" ", "_");
    const filepath = "/public/images/articles/" + filename;
    const filepathdb = "/images/articles/" + filename;
    await writeFile(path.join(process.cwd(), filepath), buffer);

    const result = await prisma.Articles.create({
      data: {
        name: data.get("name"),
        price: Number(data.get("price")),
        image: filepathdb,
        type: data.get("type"),
      },
    });

    return Response.json(result);
  } catch (error) {
    console.error("Erreur lors de l'insertion :", error);
    return Response.json(
      { error: "Une erreur est survenue lors de l'insertion." },
      { status: 500 },
    );
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const result = await prisma.Articles.findMany();
    return Response.json(result);
  } catch (error) {
    console.error("Erreur lors de la sélection :", error);
    return Response.json(
      { error: "Une erreur est survenue lors de l'insertion." },
      { status: 500 },
    );
  }
}
