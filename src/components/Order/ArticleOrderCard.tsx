"use client";

import { Card, Divider } from "@mantine/core";
import { useState } from "react";
import OptionsSelector from "../Orders/OptionsSelector";
import ArticleSelector from "../Orders/ArticleSelector";
import QuantitySelector from "../Orders/QuantitySelector";

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

  const calculateTotalPrice = (articles) => {
    return articles.reduce((total, article) => {
      const articlePrice =
        article.article.price * article.article.quantity +
        article.option1.price * article.option1.quantity +
        article.option2.price * article.option2.quantity;
      return total + articlePrice;
    }, 0);
  };

  const handleArticleSelection = (index, field, value) => {
    const newArticles = [...articles];
    if (field.startsWith("option")) {
      newArticles[index][field] = value;
    } else if (field === "article") {
      newArticles[index].article = value;
    }
    setArticles(newArticles);
    setOrderTotalPrice(calculateTotalPrice(newArticles));
  };

  const handleQuantitySelection = (index, field, value) => {
    const newArticles = [...articles];
    newArticles[index][field] = {
      ...newArticles[index][field],
      quantity: parseInt(value),
    };
    setArticles(newArticles);
    setOrderTotalPrice(calculateTotalPrice(newArticles));
  };

  return (
    <div className="flex justify-between gap-5">
      {articles.map((article, index) => (
        <div key={index}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <div className="flex justify-between gap-5">
              <ArticleSelector
                label="Article"
                index={index}
                w={200}
                onChange={handleArticleSelection}
              />
              <QuantitySelector
                index={index}
                field="article"
                value={article.article.quantity}
                onChange={handleQuantitySelection}
              />
            </div>
            <div className="flex justify-between">
              <OptionsSelector
                onChange={handleArticleSelection}
                index={index}
                selectedArticle={article}
                name="option1"
              />
              <QuantitySelector
                index={index}
                field="option1"
                value={article.option1.quantity}
                onChange={handleQuantitySelection}
              />
            </div>
            <div className="flex justify-between">
              <OptionsSelector
                w={200}
                onChange={handleArticleSelection}
                index={index}
                selectedArticle={article}
                name="option2"
              />
              <QuantitySelector
                index={index}
                field="option2"
                value={article.option2.quantity}
                onChange={handleQuantitySelection}
              />
            </div>
            <Divider my="md" />
            <div>Total : {orderTotalPrice}</div>
          </Card>
        </div>
      ))}
    </div>
  );
}
