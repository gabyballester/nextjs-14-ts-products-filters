import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";
import { ProductState } from "@/lib/validators/product-validator";
import { Dispatch, SetStateAction } from "react";
import { DefinedPriceFilter } from "./DefinedPriceFilter";
import { CustomPriceFilter } from "./CustomPriceFilter";

const PRICE_FILTERS = {
  id: "price",
  name: "Price",
  options: [
    { value: [0, 100], label: "Any price" },
    {
      value: [0, 20],
      label: "Under 20€",
    },
    {
      value: [0, 40],
      label: "Under 40€",
    },
    // custom option defined in TSX
  ],
} as const;

interface Props {
  filter: ProductState;
  setFilter: Dispatch<SetStateAction<ProductState>>;
}

export const PriceFilter = ({ filter, setFilter }: Props) => {
  return (
    <AccordionItem value="price">
      <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
        <span className="font-medium text-gray-900">Price</span>
      </AccordionTrigger>

      <AccordionContent className="pt-6 animate-none">
        <ul className="space-y-4">
          <DefinedPriceFilter
            filter={filter}
            setFilter={setFilter}
            priceFilters={PRICE_FILTERS}
          />
          <CustomPriceFilter
            filter={filter}
            setFilter={setFilter}
            priceFilters={PRICE_FILTERS}
          />
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
