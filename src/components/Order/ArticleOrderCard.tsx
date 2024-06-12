"use client";

import {
  Card,
  Image,
  TextInput,
  Text,
  Badge,
  Button,
  Group,
  Divider,
} from "@mantine/core";
import ArticleSelector from "../Orders/ArticleSelector";
import { useState } from "react";
import useSWR from "swr";
import OptionsSelector from "../Orders/OptionsSelector";
import QuantitySelector from "../Orders/QuantitySelector";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArticleOrderCard() {
  const [orderTotalPrice, setOrderTotalPrice] = useState(0);
  const [articles, setArticles] = useState([
    {
      id: 1,
      article: {
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
      },
      option1: {
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
      },
      option2: {
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
      },
    },
    {
      id: 2,
      article: {
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
      },
      option1: {
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
      },
      option2: {
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
      },
    },
    {
      id: 3,
      article: {
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
      },
      option1: {
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
      },
      option2: {
        id: 0,
        name: "",
        price: 0,
        quantity: 0,
      },
    },
  ]);

  const handleArticleSelection = (index, field, value) => {
    console.log("articles", articles);
    const newArticles = [...articles];
    if (field.startsWith("option")) {
      newArticles[index][field] = value;
    } else if (field === "article") {
      newArticles[index].article = value;
    }
    setArticles(newArticles);

    const price =
      articles[index].article.price * articles[index].article.quantity +
      articles[index].option1.price * articles[index].option1.quantity +
      articles[index].option2.price * articles[index].option2.quantity;
    setOrderTotalPrice(price);
  };

  return (
    <div className="flex justify-between gap-5">
      {articles.map((article, index) => (
        <div key={index}>
          <Card shadow="sm" padding="lg" radius="md" withBorder key={index}>
            <div className="flex justify-between gap-5">
              <ArticleSelector
                label="Article"
                index={index}
                w={200}
                onChange={handleArticleSelection}
              />
              <QuantitySelector />
            </div>
            <div className="flex justify-between">
              <OptionsSelector
                // w={200}
                onChange={handleArticleSelection}
                index={index}
                selectedArticle={article}
                name="option1"
              />
              <QuantitySelector />
            </div>
            <div className="flex justify-between">
              <OptionsSelector
                w={200}
                onChange={handleArticleSelection}
                index={index}
                selectedArticle={article}
                name="option2"
              />
              <QuantitySelector />
            </div>
            <Divider my="md" />
            <div>Total : {orderTotalPrice}</div>
          </Card>
        </div>
      ))}
    </div>
  );
}
