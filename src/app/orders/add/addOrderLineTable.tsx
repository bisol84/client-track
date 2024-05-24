"use client";

import { Table } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import ArticleSelector from "@/components/Orders/ArticleSelector";
import { NumberInput } from "@mantine/core";
import { useState } from "react";

function getPrice(articleId) {
  return fetch(`/api/article/${articleId}`)
    .then((response) => response.json())
    .then((article) => article.price);
}

function calculateTotal(price, quantity) {
  const totalPrice = parseFloat(price) * parseFloat(quantity);
  return totalPrice;
}

export default function AddOrderLineTable() {
  const [formData, setFormData] = useState([
    {
      date: "",
      article: "",
      price: 0,
      quantity: 0,
      total: 0,
    },
  ]);
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);

  const handleArticleChange = (index, articleId) => {
    getPrice(articleId).then((price) => {
      const newFormData = [...formData];
      newFormData[index].price = price;
      setFormData(newFormData);
    });
  };

  const handleOrderLineChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;

    if (field == "quantity") {
      newFormData[index].total = calculateTotal(
        newFormData[index].price,
        value,
      );
    }

    setFormData(newFormData);
  };

  const rows = formData.map((formLine: any, index: any) => (
    <Table.Tr key={index}>
      <Table.Td>
        <DateInput
          placeholder="Date de la commande"
          name="date"
          onChange={(date) => handleOrderLineChange(index, "date", date)}
        />
      </Table.Td>
      <Table.Td>
        <ArticleSelector
          label=""
          extraclass=""
          onChange={(articleId) => handleArticleChange(index, articleId)}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Prix de l'article"
          name="price"
          hideControls
          readOnly
          variant="disabled"
          value={formLine.price}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Nombre d'articles"
          name="quantity"
          value={formLine.quantity}
          hideControls
          onChange={(quantity) =>
            handleOrderLineChange(index, "quantity", quantity)
          }
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Total"
          name="total"
          hideControls
          readOnly
          variant="disabled"
          value={formLine.total}
        />
      </Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
  ));

  return (
    <Table className="mt-4">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Article</Table.Th>
          <Table.Th>Prix</Table.Th>
          <Table.Th>Quantité</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
