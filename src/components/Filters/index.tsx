import { ApiProductType } from "@/db";
import { ProductState } from "@/lib";
import { Accordion } from "@/components";
import { SubCategoryFilter } from "./SubCategoryFilter";
import { ColorFilter } from "./ColorFilter";
import { SizeFilter } from "./SizeFilter";
import { PriceFilter } from "./PriceFilter";
import { DebouncedFilter, SetStateActionType } from "@/types";

interface Props {
  filter: ProductState;
  setFilter: SetStateActionType<ProductState>;
  debouncedSubmit: DebouncedFilter<ApiProductType>;
}

export const Filters = ({ filter, setFilter, debouncedSubmit }: Props) => {
  const applyArrayFilter = ({
    category,
    value,
  }: {
    category: keyof Omit<typeof filter, "price" | "sort">;
    value: string;
  }) => {
    const isFilterApplied = filter[category].includes(value as never);

    if (isFilterApplied) {
      setFilter((prev: ProductState) => ({
        ...prev,
        [category]: prev[category].filter((v) => v !== value),
      }));
    } else {
      setFilter((prev: ProductState) => ({
        ...prev,
        [category]: [...prev[category], value],
      }));
    }

    debouncedSubmit();
  };

  return (
    <div className="hidden lg:block">
      <SubCategoryFilter />
      <Accordion type="multiple" className="animate-none">
        <ColorFilter filter={filter} applyArrayFilter={applyArrayFilter} />
        <SizeFilter filter={filter} applyArrayFilter={applyArrayFilter} />
        <PriceFilter
          filter={filter}
          setFilter={setFilter}
          debouncedSubmit={debouncedSubmit}
        />
      </Accordion>
    </div>
  );
};
