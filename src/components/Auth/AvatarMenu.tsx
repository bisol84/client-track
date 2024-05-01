"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useSession, signOut } from "next-auth/react";
import { Button } from "../ui/button";

export default function AvatarPicture() {
  const { data: session, status } = useSession();

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={session?.user?.image!} key={session?.expires} />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <Button className="w-full" variant="outline" onClick={signOut}>
          Déconnexion
        </Button>
      </PopoverContent>
    </Popover>
  );
}
