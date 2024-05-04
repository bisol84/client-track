import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

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
    <Card className="w-52">
      <CardHeader className="relative">
        <div className="h-40">
          <Image src={image} layout="fill" objectFit="cover" alt={image_alt} />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold mb-2">{name}</CardTitle>
        <CardDescription className="text-sm mb-4">{type}</CardDescription>
        <p className="text-lg font-semibold">{price} CHF</p>
      </CardContent>
    </Card>
  );
}
