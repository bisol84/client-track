import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";

export default function Header() {
  return (
    <nav className="flex p-4 justify-between">
      <Logo />
      <Menu />
    </nav>
  );
}
