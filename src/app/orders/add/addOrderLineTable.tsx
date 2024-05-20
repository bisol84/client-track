"use client";

import { Table } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import ArticleSelector from "@/components/Orders/ArticleSelector";
import { NumberInput } from "@mantine/core";
import { useState } from "react";

function getPrice(articleId) {
  /*
  Ajouter l'index
  set du prix pour l'index
  */
  return fetch(`/api/article/${articleId}`)
    .then((response) => response.json())
    .then((article) => article.price);
}

export default function AddOrderLineTable() {
  const [orderLine, setOrderLine] = useState([
    {
      date: "",
      article: "",
      quantity: 0,
      price: 0,
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleOrderLineChange = (index, field, value) => {
    const newOrderLine = [...orderLine];
    newOrderLine[index][field] = value;
    setOrderLine(newOrderLine);
  };

  const rows = orderLine.map((line: any, index: any) => (
    <Table.Tr key={index}>
      <Table.Td>
        <DateInput
          placeholder="Date de la commande"
          name="date"
          onChange={(date) => handleOrderLineChange(index, "date", date)}
        />
      </Table.Td>
      <Table.Td>
        <ArticleSelector label="" extraclass="" />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Nombre d'articles"
          name="quantity"
          hideControls
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Prix de l'article"
          name="price"
          hideControls
          readOnly
          variant="disabled"
        />
      </Table.Td>
      <Table.Td></Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
  ));

  return (
    <Table className="mt-4">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Article</Table.Th>
          <Table.Th>Quantité</Table.Th>
          <Table.Th>Prix</Table.Th>
          <Table.Th></Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
