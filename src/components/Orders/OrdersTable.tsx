"use client";

import { Table } from "@mantine/core";
import * as dayjs from "dayjs";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Checkbox } from "@mantine/core";

export default function OrdersTable({ orders }) {
  const rows = orders.map((order) => (
    <Table.Tr key={order.id}>
      <Table.Td>
        <Link href={`/order/${order.id}`}>{order.id}</Link>
      </Table.Td>
      <Table.Td>{dayjs(order.date).format("DD/MM/YYYY")}</Table.Td>
      <Table.Td>{order.firstname}</Table.Td>
      <Table.Td>{order.lastname}</Table.Td>
      <Table.Td>{order.address}</Table.Td>
      <Table.Td>{order.locality}</Table.Td>
      <Table.Td>
        <Checkbox checked={order.billed} readOnly />
      </Table.Td>
      <Table.Td>{order.price_total}</Table.Td>
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
          <Table.Th>No</Table.Th>
          <Table.Th>Date</Table.Th>
          <Table.Th>Prénom</Table.Th>
          <Table.Th>Nom</Table.Th>
          <Table.Th>Adresse</Table.Th>
          <Table.Th>Localité</Table.Th>
          <Table.Th>Payé</Table.Th>
          <Table.Th>Prix</Table.Th>
          <Table.Th></Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
