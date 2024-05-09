"use client";

import { useState } from "react";
import ArticleEditForm from "./articleEditForm";
import ArticleCardWithoutButton from "@/components/Articles/ArticleCardWithoutButton";

export default function ArticleEditor() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
    type: "",
  });

  return (
    <div className="m-4 flex justify-center">
      <div className="flex w-[600px] items-center justify-center border-gray-100 border-2 p-4">
        <div className="flex justify-between gap-12">
          <ArticleEditForm formData={formData} setFormData={setFormData} />
          <ArticleCardWithoutButton formData={formData} />
        </div>
      </div>
    </div>
  );
}
