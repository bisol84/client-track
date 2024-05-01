import Menu from "./Menu";
import Logo from "./Logo";
import LoginButton from "../Auth/LoginButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import AvatarPicture from "../Auth/AvatarMenu";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex p-4 justify-between items-center">
      <Logo />
      <Menu />
      {session && <AvatarPicture />}
      {!session && <LoginButton />}
    </nav>
  );
}
