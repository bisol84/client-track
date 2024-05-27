import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.formData();
    const client = await prisma.Clients.findUnique({
      where: { id: parseInt(data.get("client-selector")) },
    });

    // console.log(client);
    console.log(data);

    const result = await prisma.Orders.create({
      data: {
        firstname: client.firstname,
        lastname: client.lastname,
        address: client.address,
        npa: client.npa,
        locality: client.locality,

        date: data.get("order-date"),
        article_price: parseFloat(data.get("article-price")),
        article_quantity: parseInt(data.get("article-quantity")),
        article_total: parseFloat(data.get("article-total-price")),

        order_total_price: data.get("order-total-price"),

        shipping_method: "",
        shipping_price: 0,

        billed_method: "",

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
