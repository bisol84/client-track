import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.formData();
    const result = await prisma.Clients.create({
      data: {
        firstname: data.get("firstname"),
        lastname: data.get("lastname"),
        address: data.get("address"),
        npa: parseInt(data.get("npa")),
        locality: data.get("locality"),
        phone: data.get("phone"),
        email: data.get("email"),
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
