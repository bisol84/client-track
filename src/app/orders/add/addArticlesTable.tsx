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

export default function AddArticlesTable() {
  const [articles, setArticles] = useState([
    {
      articleId: "",
      quantity: 0,
      price: 0,
    },
  ]);

  const handleArticleChange = (index, articleId) => {
    const newArticles = [...articles];
    newArticles[index].articleId = articleId;
    getPrice(articleId).then((price) => {
      newArticles[index].price = newArticles[index].quantity * price;
      setArticles(newArticles);
    });
  };

  const rows = articles.map((article, index) => (
    <Table.Tr key={index}>
      <Table.Td>
        <DateInput placeholder="Date de la commande" />
      </Table.Td>
      <Table.Td>
        <ArticleSelector
          label=""
          extraclass=""
          onArticleChange={(articleId) => handleArticleChange(index, articleId)}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Nombre d'articles"
          name="quantity"
          hideControls
          value={article.quantity}
          onChange={(value) => {
            const newArticles = [...articles];
            newArticles[index].quantity = value;
            handleArticleChange(index, newArticles[index].articleId);
            setArticles(newArticles);
          }}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Prix de l'article"
          name="price"
          hideControls
          readOnly
          variant="disabled"
          value={article.price}
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
          <Table.Th>Nombre</Table.Th>
          <Table.Th>Prix</Table.Th>
          <Table.Th></Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
