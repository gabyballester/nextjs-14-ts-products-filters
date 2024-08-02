import { ApiProductType } from "@/db";
import { ProductState } from "@/lib";
import { DebouncedFilter, PriceFilterType, SetStateActionType } from "@/types";

interface Props {
  filter: ProductState;
  priceFilters: PriceFilterType;
  setFilter: SetStateActionType<ProductState>;
  debouncedSubmit: DebouncedFilter<ApiProductType>;
}

export const DefinedPriceFilter = ({
  filter,
  priceFilters,
  setFilter,
  debouncedSubmit,
}: Props) => {
  return priceFilters.options.map((option, optionIdx) => (
    <li key={option.label} className="flex items-center">
      <input
        type="radio"
        id={`price-${optionIdx}`}
        onChange={() => {
          setFilter((prev: ProductState) => ({
            ...prev,
            price: {
              isCustom: false,
              range: [...option.value],
            },
          }));

          debouncedSubmit();
        }}
        checked={
          !filter.price.isCustom &&
          filter.price.range[0] === option.value[0] &&
          filter.price.range[1] === option.value[1]
        }
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label
        htmlFor={`price-${optionIdx}`}
        className="ml-3 text-sm text-gray-600"
      >
        {option.label}
      </label>
    </li>
  ));
};
