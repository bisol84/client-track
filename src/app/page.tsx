import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function Home() {
  // Get user session token
  const session = await getServerSession(authOptions);
  // session = null || { user: { name, email, image } }

  return <main className="p-4">{session?.user?.image}</main>;
}
