"use client";

import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

// interface Article {
//   image: string;
//   id: number;
//   image_alt: string;
//   name: string;
//   price: number;
//   type: string;
//   type_color: string;
// }

export default function ArticleCardWithoutButton({ formData }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={311}>
      <Card.Section>
        <Image src={formData.image} height={160} alt={formData.image_alt} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} className="text-xl">
          {formData.name}
        </Text>
        <Badge color={formData.type_color}>{formData.type}</Badge>
      </Group>

      <Text className="font-semibold">{formData.price} CHF</Text>
    </Card>
  );
}
