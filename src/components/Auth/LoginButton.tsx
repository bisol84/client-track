"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export default function LoginButton() {
  return (
    <Button
      type="button"
      className="rounded-md px-4 py-2"
      onClick={() => signIn()}
      variant={"outline"}
    >
      Connexion
    </Button>
  );
}
