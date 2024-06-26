"use client";

import { signIn } from "next-auth/react";
import { Button } from "@mantine/core";

export default function LoginButton() {
  return (
    <Button
      type="button"
      className="rounded-md px-4 py-2"
      onClick={() => signIn("google")}
      variant={"outline"}
    >
      Connexion
    </Button>
  );
}
