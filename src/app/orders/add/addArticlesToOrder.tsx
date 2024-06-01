"use client";

import { useState } from "react";
import ArticleOrderCard from "@/components/Order/ArticleOrderCard";

export default function AddArticlesToOrder({ onChange }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <ArticleOrderCard onChange={onChange} />
      </div>
    </div>
  );
}
