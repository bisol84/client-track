"use client";

import { Avatar } from "@mantine/core";
import { Popover } from "@mantine/core";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@mantine/core";

export default function AvatarPicture() {
  const { data: session, status } = useSession();

  return (
    <Popover>
      <Popover.Target>
        <Avatar src={session?.user?.image!} />
      </Popover.Target>
      <Popover.Dropdown>
        <Button className="w-full" variant="outline" onClick={signOut}>
          Déconnexion
        </Button>
      </Popover.Dropdown>
    </Popover>
  );
}
