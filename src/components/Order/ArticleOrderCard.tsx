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

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArticleOrderCard() {
  const [articleTotal, setArticleTotal] = useState(0);
  const [articleId, setArticleId] = useState(null);

  const { data, error } = useSWR(
    articleId ? `/api/article/${articleId}` : null,
    fetcher,
  );

  function handleArticleChange(articleId) {
    setArticleId(articleId);
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <div>
        <div className="flex justify-between">
          <ArticleSelector
            label="Article"
            w={200}
            onChange={handleArticleChange}
          />
          <TextInput label="Nombre" description="" placeholder="" w={100} />
        </div>
        <div className="flex justify-between">
          <TextInput
            label="Option 1"
            description=""
            placeholder=""
            mt="md"
            w={200}
          />
          <TextInput
            label="Nombre"
            description=""
            placeholder=""
            mt="md"
            w={100}
          />
        </div>
        <div className="flex justify-between">
          <TextInput
            label="Option 2"
            description=""
            placeholder=""
            mt="md"
            w={200}
          />
          <TextInput
            label="Nombre"
            description=""
            placeholder=""
            mt="md"
            w={100}
          />
        </div>
      </div>
      <Divider my="md" />
      <div>Total : {data ? data.price + articleTotal : articleTotal}</div>
    </Card>
  );
}
