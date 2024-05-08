"use client";

import { Tabs } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const menuItems = [
    { label: "Tableau de bord", href: "/dashboard" },
    { label: "Commandes", href: "/commands" },
    { label: "Clients", href: "/clients" },
    { label: "Articles", href: "/articles" },
  ];

  return (
    <Tabs>
      <Tabs.List>
        {menuItems.map((item) => (
          <Tabs.Tab key={item.label} value={item.label}>
            <Link href={item.href} legacyBehavior passHref>
              {/* <NavigationMenuLink
                className={isActive(item.href) ? "border-b-2 font-bold" : ""}
              > */}
              {item.label}
              {/* </NavigationMenuLink> */}
            </Link>
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}
