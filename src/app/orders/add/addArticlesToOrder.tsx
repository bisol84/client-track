"use client";

import { useState } from "react";
import ArticleOrderCard from "@/components/Order/ArticleOrderCard";

export default function AddArticlesToOrder({ onChange }) {
  return <ArticleOrderCard onChange={onChange} />;
}
