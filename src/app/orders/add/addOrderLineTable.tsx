"use client";

import { Table } from "@mantine/core";
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
      article_price: 0,
      article_quantity: 0,
      article_total_price: 0,
    },
  ]);
  const [orderTotalPrice, setOrderTotalPrice] = useState(0);

  const handleArticleChange = (index, articleId) => {
    getPrice(articleId).then((articlePrice) => {
      const newFormData = [...formData];
      newFormData[index].article_price = articlePrice;
      setFormData(newFormData);
    });
  };

  const handleOrderLineChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;

    if (field === "quantity") {
      newFormData[index].article_total_price = calculateTotal(
        newFormData[index].article_price,
        value,
      );
    }

    setFormData(newFormData);

    const total = newFormData.reduce(
      (sum, item) => sum + item.article_total_price,
      0,
    );
    setOrderTotalPrice(total);
  };

  const rows = formData.map((formLine, index) => (
    <Table.Tr key={index}>
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
          name="article-price"
          hideControls
          readOnly
          variant="disabled"
          value={formLine.article_price}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Nombre d'articles"
          name="article-quantity"
          value={formLine.article_quantity}
          hideControls
          onChange={(quantity) =>
            handleOrderLineChange(index, "quantity", quantity)
          }
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Total"
          name="article-total-price"
          hideControls
          readOnly
          variant="disabled"
          value={formLine.article_total_price}
        />
      </Table.Td>
      <Table.Td></Table.Td>
    </Table.Tr>
  ));

  return (
    <Table className="mt-4">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Article</Table.Th>
          <Table.Th>Prix</Table.Th>
          <Table.Th>Quantité</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows}
        <Table.Tr key="total">
          <Table.Td colSpan={2}></Table.Td>
          <Table.Td className="text-right">
            <strong>Total</strong>
          </Table.Td>
          <Table.Td>
            <NumberInput
              placeholder="Total"
              name="order-total-price"
              hideControls
              readOnly
              variant="disabled"
              value={orderTotalPrice}
            />
          </Table.Td>
          <Table.Td></Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
