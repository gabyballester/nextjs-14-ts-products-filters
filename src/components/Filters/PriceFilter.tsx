import { ApiProductType } from "@/db";
import { ProductState } from "@/lib";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";
import { DefinedPriceFilter } from "./DefinedPriceFilter";
import { CustomPriceFilter } from "./CustomPriceFilter";
import { DebouncedFilter, SetStateActionType } from "@/types";

interface Props {
  filter: ProductState;
  setFilter: SetStateActionType<ProductState>;
  debouncedSubmit: DebouncedFilter<ApiProductType>;
}

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

export const PriceFilter = ({ filter, setFilter, debouncedSubmit }: Props) => {
  return (
    <AccordionItem value="price">
      <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
        <span className="font-medium text-gray-900">Price</span>
      </AccordionTrigger>

      <AccordionContent className="pt-2 animate-none">
        <ul className="space-y-4">
          <DefinedPriceFilter
            filter={filter}
            setFilter={setFilter}
            priceFilters={PRICE_FILTERS}
            debouncedSubmit={debouncedSubmit}
          />
          <CustomPriceFilter
            filter={filter}
            setFilter={setFilter}
            priceFilters={PRICE_FILTERS}
            debouncedSubmit={debouncedSubmit}
          />
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
