import prisma from "@/lib/db";

export default async function getClients() {
  const data = await prisma.Clients.findMany();

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}
