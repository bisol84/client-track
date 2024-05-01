"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      type="button"
      className="bg-sky-400 rounded-md px-4 py-2"
      onClick={() => signIn()}
    >
      Connexion
    </button>
  );
}
