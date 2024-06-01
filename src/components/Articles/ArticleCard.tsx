"use client";

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import Link from "next/link";

interface Article {
  image: string;
  id: number;
  image_alt: string;
  name: string;
  price: number;
  type: string;
  type_color: string;
}

export default function ArticleCard({
  id,
  image,
  image_alt,
  name,
  price,
  type,
  type_color,
}: Article) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h={300}>
      <Card.Section h={150}>
        <Image src={image} h={150} alt={image_alt} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} className="text-xl">
          {name}
        </Text>
        <Badge color={type_color}>{type}</Badge>
      </Group>

      <Text className="font-semibold">{price} CHF</Text>
      <Link href={`/article/${id}`}>
        <Button className="mt-3 w-full">Modifier</Button>
      </Link>
    </Card>
  );
}
