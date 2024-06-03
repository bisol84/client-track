import { NativeSelect } from "@mantine/core";
import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function OptionsSelector({ onChange, selectedArticle, w }) {
  const { data: dataOptions, error: errorOptions } = useSWR(
    selectedArticle ? `/api/options/${selectedArticle}` : null,
    fetcher,
  );

  if (errorOptions) return <div>Erreur</div>;
  if (!dataOptions) return <div>Chargement...</div>;

  const formattedData = dataOptions.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  return (
    <NativeSelect
      label="Option"
      data={formattedData}
      className={`w-[${w}]`}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
