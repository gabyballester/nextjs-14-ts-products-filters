import { useState } from "react";
import { DEFAULT_CUSTOM_PRICE } from "@/components/Filters/CustomPriceFilter";
import { ProductState } from "@/lib";

export function useProductFilter() {
  const [filter, setFilter] = useState<ProductState>({
    color: ["beige", "blue", "green", "purple", "white"],
    price: { isCustom: false, range: DEFAULT_CUSTOM_PRICE },
    size: ["L", "M", "S"],
    sort: "none",
  });

  return { filter, setFilter };
}
