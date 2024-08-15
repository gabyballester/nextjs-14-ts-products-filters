import { ChevronDown, Filter } from "lucide-react";
import { cn, ProductState } from "@/lib";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components";
import { DebouncedFilter, SetStateActionType } from "@/types";
import { ApiProductType } from "@/db";

const SORT_OPTIONS = [
  { name: "None", value: "none" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
] as const;

interface Props {
  title: string;
  setFilter: SetStateActionType<ProductState>;
  filter: ProductState;
  debouncedSubmit: DebouncedFilter<ApiProductType>;
}

export const Header = ({
  title,
  setFilter,
  filter,
  debouncedSubmit,
}: Props) => {
  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
            <button className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
              <Filter className="h-5 w-5" />
            </button>
            <p className="hidden lg:block">Sort</p>
            <ChevronDown className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {SORT_OPTIONS.map((option) => (
              <button
                key={option.name}
                className={cn("text-left w-full block px-4 py-2 text-sm", {
                  "text-gray-900 bg-gray-100": option.value === filter.sort,
                  "text-gray-500": option.value !== filter.sort,
                })}
                onClick={() => {
                  setFilter((prev: ProductState) => ({
                    ...prev,
                    sort: option.value,
                  }));

                  debouncedSubmit();
                }}
              >
                {option.name}
              </button>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
