"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  TextInput,
  NumberInput,
  InputBase,
} from "@mantine/core";
import { FaCartPlus } from "react-icons/fa";
import { IMaskInput } from "react-imask";
import ClientSelector from "@/components/Orders/ClientSelector";
import ArticleSelector from "@/components/Orders/ArticleSelector";

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/clients/", {
    method: "POST",
    body: formData,
  });
}

export function AddOrderModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Ajouter une commande">
        <form onSubmit={onSubmit}>
          <ClientSelector />
          <ArticleSelector />

          <div className="flex justify-end items-end">
            <Button onClick={close} type="submit" className="mt-4">
              Ajouter
            </Button>
          </div>
        </form>
      </Modal>

      <Button onClick={open} variant="outline">
        <FaCartPlus size={20} />
      </Button>
    </>
  );
}
