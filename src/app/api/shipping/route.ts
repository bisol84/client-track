import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const result = await prisma.Shipping_methods.findMany();
    return Response.json(result);
  } catch (error) {
    console.error("Erreur lors de la sélection :", error);
    return Response.json(
      { error: "Une erreur est survenue lors de la sélection." },
      { status: 500 },
    );
  }
}
