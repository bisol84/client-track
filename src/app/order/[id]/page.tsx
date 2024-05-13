import OrderTable from "@/components/Order/OrderTable";
import prisma from "@/lib/db";

async function getData(params: string) {
  const data = await prisma.Order_line.findMany({
    where: {
      id_order: parseInt(params),
    },
  });

  if (!data) {
    throw new Error("Failed to fetch data");
  }
  console.log(data);
  return data;
}

export default function Client({ params }: { params: { id: string } }) {
  const orderID = getData(params.id);

  return (
    <main className="m-4">
      <OrderTable order={orderID} />
    </main>
  );
}
