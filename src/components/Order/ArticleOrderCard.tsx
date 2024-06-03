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
  const [articleTotal, setArticleTotal] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <div>
        <div className="flex justify-between">
          <ArticleSelector
            label="Article"
            w={200}
            onChange={setSelectedArticle}
          />
          <TextInput label="Nombre" description="" placeholder="" w={100} />
        </div>
        <div className="flex justify-between">
          <OptionsSelector
            w={200}
            onChange={setSelectedOption1}
            selectedArticle={selectedArticle}
          />
          <TextInput label="Nombre" description="" placeholder="" w={100} />
        </div>
        <div className="flex justify-between">
          <TextInput label="Option 2" description="" placeholder="" w={200} />
          <TextInput label="Nombre" description="" placeholder="" w={100} />
        </div>
      </div>
      <Divider my="md" />
      {/* <div>Total : {data ? data.price + articleTotal : articleTotal}</div> */}
    </Card>
  );
}
