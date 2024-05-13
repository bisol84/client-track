import prisma from "@/lib/db";

export default async function getOrders() {
  const data = await prisma.Orders.findMany();

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
