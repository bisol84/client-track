import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

interface Article {
  image: string;
  id: number;
  image_alt: string;
  name: string;
  price: number;
  type: string;
}

export default function ArticleCard({
  image,
  image_alt,
  name,
  price,
  type,
}: Article) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={image} height={160} alt={image_alt} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
