"use client";

import { Table } from "@mantine/core";
import ArticleSelector from "@/components/Orders/ArticleSelector";
import { NumberInput, NativeSelect } from "@mantine/core";
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
        <NativeSelect
          label=""
          className="w-full"
          data={[
            "12-15 ans",
            "1-7 ans",
            "2-4 ans",
            "Semainier (7 lingettes + panier",
          ]}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Nombre d'option 1"
          name="option1-quantity"
          value={formLine.article_quantity}
          hideControls
          // onChange={(quantity) =>
          //   handleOrderLineChange(index, "quantity", quantity)
          // }
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Prix de l'option 1"
          name="option1-price"
          hideControls
          readOnly
          variant="disabled"
          // value={formLine.article_price}
        />
      </Table.Td>
      <Table.Td>
        {" "}
        <NativeSelect
          label=""
          className="w-full"
          data={[
            "12-15 ans",
            "1-7 ans",
            "2-4 ans",
            "Semainier (7 lingettes + panier",
          ]}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          placeholder="Nombre d'option 2"
          name="option2-quantity"
          value={formLine.article_quantity}
          hideControls
          // onChange={(quantity) =>
          //   handleOrderLineChange(index, "quantity", quantity)
          // }
        />
      </Table.Td>
      <Table.Td>
        {" "}
        <NumberInput
          placeholder="Prix de l'option 2"
          name="option2-price"
          hideControls
          readOnly
          variant="disabled"
          // value={formLine.article_price}
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
    </Table.Tr>
  ));

  return (
    <Table className="mt-4">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Article</Table.Th>
          <Table.Th>Prix</Table.Th>
          <Table.Th>Quantité</Table.Th>
          <Table.Th>Opt1</Table.Th>
          <Table.Th>Qua1</Table.Th>
          <Table.Th>Pri1</Table.Th>
          <Table.Th>Opt2</Table.Th>
          <Table.Th>Qua2</Table.Th>
          <Table.Th>Pri2</Table.Th>
          <Table.Th>Prix</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows}
        <Table.Tr key="total">
          <Table.Td colSpan={8}></Table.Td>
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
