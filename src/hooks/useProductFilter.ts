import { FilterType } from "@/types";
import { useState } from "react";

export function useProductFilter() {
  const [filter, setFilter] = useState<FilterType>({
    sort: "none",
  });

  const updateFilter = (value: string) => {
    setFilter((prevState) => ({
      ...prevState,
      sort: value,
    }));
  };

  return { filter, updateFilter };
}
