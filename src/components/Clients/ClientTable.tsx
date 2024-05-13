"use client";

import { Table } from "@mantine/core";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function ClientTable({ clients }) {
  const rows = clients.map((client) => (
    <Table.Tr key={client.id}>
      <Table.Td>{client.firstname}</Table.Td>
      <Table.Td>{client.lastname}</Table.Td>
      <Table.Td>{client.address}</Table.Td>
      <Table.Td>{client.npa}</Table.Td>
      <Table.Td>{client.locality}</Table.Td>
      <Table.Td>{client.phone}</Table.Td>
      <Table.Td>{client.email}</Table.Td>
      <Table.Td>
        <FaEdit size={18} />
      </Table.Td>
      <Table.Td>
        <MdDelete size={20} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Nom</Table.Th>
          <Table.Th>Prénom</Table.Th>
          <Table.Th>Adresse</Table.Th>
          <Table.Th>NPA</Table.Th>
          <Table.Th>Localité</Table.Th>
          <Table.Th>Téléphone</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th></Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
