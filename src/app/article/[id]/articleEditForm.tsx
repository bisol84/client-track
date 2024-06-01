import { TextInput, Button } from "@mantine/core";
import { FileInput } from "@mantine/core";

export default function ArticleEditForm({ formData, setFormData }) {
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div>
      <TextInput
        label="Titre"
        description="Titre de l'article"
        placeholder=""
        mt="md"
        value={formData.name}
        onChange={(event) => handleChange("name", event.target.value)}
      />
      <TextInput
        label="Prix"
        description="Prix de l'article"
        placeholder=""
        mt="md"
        value={formData.price}
        onChange={(event) => handleChange("price", event.target.value)}
      />
      <FileInput
        accept="image/png,image/jpeg"
        label="Upload files"
        placeholder="Upload files"
        mt="md"
        onChange={(event) => handleChange("image", event?.target.files[0])}
      />
      <TextInput
        label="Type"
        description="Type de l'article"
        placeholder=""
        mt="md"
        value={formData.type}
        onChange={(event) => handleChange("type", event.target.value)}
      />
      <Button type="submit" mt="md" className="w-full">
        Enregistrer
      </Button>
    </div>
  );
}
