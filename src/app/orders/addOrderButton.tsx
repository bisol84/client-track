"use client";

import { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";

export function AddOrderButton() {
  return (
    <Link href={`/orders/add`}>
      <Button variant="outline">
        <FaCartPlus size={20} />
      </Button>
    </Link>
  );
}
