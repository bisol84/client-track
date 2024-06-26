"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  TextInput,
  NumberInput,
  InputBase,
} from "@mantine/core";
import { IoMdPersonAdd } from "react-icons/io";
import { IMaskInput } from "react-imask";

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/clients/", {
    method: "POST",
    body: formData,
  });
}

export function AddClientModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Ajouter un client">
        <form onSubmit={onSubmit}>
          <div className="flex justify-between">
            <TextInput label="Prénom" name="firstname" placeholder="" />
            <TextInput label="Nom" name="lastname" placeholder="" />
          </div>
          <TextInput
            label="Adresse"
            name="address"
            placeholder=""
            className="mt-3"
          />
          <div className="flex justify-between">
            <NumberInput
              label="NPA"
              name="npa"
              placeholder=""
              style={{ width: "20%" }}
              className="mt-3"
              hideControls
            />
            <TextInput
              label="Localité"
              name="locality"
              placeholder=""
              style={{ width: "75%" }}
              className="mt-3"
            />
          </div>
          <InputBase
            label="Téléphone"
            component={IMaskInput}
            mask="+41 00 000 00 00"
            name="phone"
            className="mt-3"
          />
          <TextInput
            label="Email"
            name="email"
            placeholder=""
            className="mt-3"
          />
          <div className="flex justify-end items-end">
            <Button onClick={close} type="submit" className="mt-4">
              Ajouter
            </Button>
          </div>
        </form>
      </Modal>

      <Button onClick={open} variant="outline">
        <IoMdPersonAdd size={20} />
      </Button>
    </>
  );
}
