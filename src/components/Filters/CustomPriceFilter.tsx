import { ApiProductType } from "@/db";
import { cn, ProductState } from "@/lib";
import { Slider } from "../ui";
import { DebouncedFilter, PriceFilterType, SetStateActionType } from "@/types";

export const DEFAULT_CUSTOM_PRICE = [0, 100] as [number, number];

interface Props {
  filter: ProductState;
  priceFilters: PriceFilterType;
  setFilter: SetStateActionType<ProductState>;
  debouncedSubmit: DebouncedFilter<ApiProductType>;
}

export const CustomPriceFilter = ({
  filter,
  priceFilters,
  setFilter,
  debouncedSubmit,
}: Props) => {
  const minPrice = Math.min(filter.price.range[0], filter.price.range[1]);
  const maxPrice = Math.max(filter.price.range[0], filter.price.range[1]);

  return (
    <li className="flex justify-center flex-col gap-2">
      <div>
        <input
          type="radio"
          id={`price-${priceFilters.options.length}`}
          onChange={() => {
            setFilter((prev: ProductState) => ({
              ...prev,
              price: {
                isCustom: true,
                range: [0, 100],
              },
            }));

            debouncedSubmit();
          }}
          checked={filter.price.isCustom}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label
          htmlFor={`price-${priceFilters.options.length}`}
          className="ml-3 text-sm text-gray-600"
        >
          Custom
        </label>
      </div>

      <div className="flex justify-between">
        <p className="font-medium">Price</p>
        <div>
          {filter.price.isCustom
            ? minPrice.toFixed(0)
            : filter.price.range[0].toFixed(0)}{" "}
          € -{" "}
          {filter.price.isCustom
            ? maxPrice.toFixed(0)
            : filter.price.range[1].toFixed(0)}{" "}
          €
        </div>
      </div>

      <Slider
        className={cn({
          "opacity-50": !filter.price.isCustom,
        })}
        disabled={!filter.price.isCustom}
        onValueChange={(range) => {
          const [newMin, newMax] = range;

          setFilter((prev: ProductState) => ({
            ...prev,
            price: {
              isCustom: true,
              range: [newMin, newMax],
            },
          }));

          debouncedSubmit();
        }}
        value={
          filter.price.isCustom ? filter.price.range : DEFAULT_CUSTOM_PRICE
        }
        min={DEFAULT_CUSTOM_PRICE[0]}
        defaultValue={DEFAULT_CUSTOM_PRICE}
        max={DEFAULT_CUSTOM_PRICE[1]}
        step={5}
      />
    </li>
  );
};
