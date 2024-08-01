import { ProductState } from "@/lib/validators/product-validator";
import { useState } from "react";

const DEFAULT_CUSTOM_PRICE = [0, 100] as [number, number];

export function useProductFilter() {
  const [filter, setFilter] = useState<ProductState>({
    color: ["beige", "blue", "green", "purple", "white"],
    price: { isCustom: false, range: DEFAULT_CUSTOM_PRICE },
    size: ["L", "M", "S"],
    sort: "none",
  });

  return { filter, setFilter };
}
