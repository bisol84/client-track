import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.formData();
    console.log(data);
    const client = await prisma.Clients.findUnique({
      where: { id: parseInt(data.get("client-selector")) },
    });
    console.log(client);
    const result = await prisma.Orders.create({
      data: {
        firstname: client.firstname,
        lastname: client.lastname,
        address: client.address,
        npa: client.npa,
        locality: client.locality,

        date: data.get("order_date"),
        // price: parseFloat(data.get("price")),
        // quantity: parseInt(data.get("quantity")),
        // total: parseFloat(data.get("total")),
        price_total: 0,

        shipping_method: "",
        shipping_price: 0,
        shipping_date: "2024-05-02T22:00:00.000Z",

        billed_method: "",
        billed_date: "2024-05-02T22:00:00.000Z",

        comment: "",
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
