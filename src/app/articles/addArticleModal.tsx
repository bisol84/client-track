"use client";

import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { revalidatePath } from "next/cache";
import {
  Modal,
  Button,
  TextInput,
  NumberInput,
  InputBase,
} from "@mantine/core";
import { FileInput } from "@mantine/core";
import { GiWool } from "react-icons/gi";

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/articles/", {
    method: "POST",
    body: formData,
  });
}

export function AddArticleModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const [formData, setFormData] = useState([]);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Ajouter un article">
        <form onSubmit={onSubmit}>
          <div>
            <TextInput
              label="Titre"
              description="Titre de l'article"
              placeholder=""
              mt="md"
              name="name"
              onChange={(event) => handleChange("name", event.target.value)}
            />
            <NumberInput
              label="Prix"
              description="Prix de l'article"
              placeholder=""
              mt="md"
              name="price"
              hideControls
              onChange={(event) => handleChange("price", event.target.value)}
            />
            <FileInput
              accept="image/png,image/jpeg"
              label="Upload files"
              placeholder="Upload files"
              mt="md"
              name="image"
            />

            <TextInput
              label="Type"
              description="Type de l'article"
              placeholder=""
              mt="md"
              name="type"
              onChange={(event) => handleChange("type", event.target.value)}
            />

            <Button type="submit" mt="md" className="w-full" onClick={close}>
              Enregistrer
            </Button>
          </div>
        </form>
      </Modal>

      <Button onClick={open} variant="outline">
        <GiWool size={20} />
      </Button>
    </>
  );
}
