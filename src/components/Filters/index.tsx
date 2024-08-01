import { Dispatch, SetStateAction } from "react";
import { ProductState } from "@/lib/validators/product-validator";
import { Accordion } from "@/components";
import { SubCategoryFilter } from "./SubCategoryFilter";
import { ColorFilter } from "./ColorFilter";
import { SizeFilter } from "./SizeFilter";
import { PriceFilter } from "./PriceFilter";

interface Props {
  filter: ProductState;
  setFilter: Dispatch<SetStateAction<ProductState>>;
}

export const Filters = ({ filter, setFilter }: Props) => {
  const applyArrayFilter = ({
    category,
    value,
  }: {
    category: keyof Omit<typeof filter, "price" | "sort">;
    value: string;
  }) => {
    const isFilterApplied = filter[category].includes(value as never);

    if (isFilterApplied) {
      setFilter((prev) => ({
        ...prev,
        [category]: prev[category].filter((v) => v !== value),
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        [category]: [...prev[category], value],
      }));
    }
  };

  return (
    <div className="hidden lg:block">
      <SubCategoryFilter />
      <Accordion type="multiple" className="animate-none">
        <ColorFilter filter={filter} applyArrayFilter={applyArrayFilter} />
        <SizeFilter filter={filter} applyArrayFilter={applyArrayFilter} />
        <PriceFilter filter={filter} setFilter={setFilter} />
      </Accordion>
    </div>
  );
};
