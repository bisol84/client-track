"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const menuItems = [
    { label: "Accueil", href: "/" },
    { label: "Tableau de bord", href: "/dashboard" },
    { label: "Commandes", href: "/commands" },
    { label: "Clients", href: "/clients" },
    { label: "Articles", href: "/articles" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={isActive(item.href) ? "border-b-2 font-bold" : ""}
              >
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
