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
      },
      option2: {
        id: 0,
        name: "",
        price: 0,
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
      options: {
        id: 0,
        name: "",
        price: 0,
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
      options: {
        id: 0,
        name: "",
        price: 0,
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

    // Recalculate the total order price
    // const total = newArticles.reduce((sum, article) => sum + article.price * article.quantity, 0);
    // setOrderTotalPrice(total);
  };

  return (
    <div className="flex justify-between gap-5">
      {articles.map((article, index) => (
        <div key={index}>
          <Card shadow="sm" padding="lg" radius="md" withBorder key={index}>
            <div className="flex justify-between">
              <ArticleSelector
                label="Article"
                index={index}
                w={200}
                onChange={handleArticleSelection}
              />
              <TextInput label="Nombre" description="" placeholder="" w={100} />
            </div>
            <div className="flex justify-between">
              <OptionsSelector
                w={200}
                onChange={handleArticleSelection}
                index={index}
                selectedArticle={article}
                name="option1"
              />
              <TextInput label="Nombre" description="" placeholder="" w={100} />
            </div>
            <div className="flex justify-between">
              <OptionsSelector
                w={200}
                onChange={handleArticleSelection}
                index={index}
                selectedArticle={article}
                name="option2"
              />
              <TextInput label="Nombre" description="" placeholder="" w={100} />
            </div>
            <Divider my="md" />
            <div>Total : {orderTotalPrice}</div>
          </Card>
        </div>
      ))}
    </div>
  );
}
