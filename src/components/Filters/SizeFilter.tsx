import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";
import { ProductState } from "@/lib/validators/product-validator";

interface Props {
  filter: ProductState;
  applyArrayFilter: ({
    category,
    value,
  }: {
    category: keyof Omit<ProductState, "price" | "sort">;
    value: string;
  }) => void;
}

const SIZE_FILTERS = {
  id: "size",
  name: "Size",
  options: [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
  ],
} as const;

export const SizeFilter = ({ applyArrayFilter, filter }: Props) => {
  return (
    <AccordionItem value="size">
      <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
        <span className="font-medium text-gray-900">Size</span>
      </AccordionTrigger>

      <AccordionContent className="pt-6 animate-none">
        <ul className="space-y-4">
          {SIZE_FILTERS.options.map((option, optionIdx) => (
            <li key={option.value} className="flex items-center">
              <input
                type="checkbox"
                id={`size-${optionIdx}`}
                onChange={() => {
                  applyArrayFilter({
                    category: "size",
                    value: option.value,
                  });
                }}
                checked={filter.size.includes(option.value)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={`size-${optionIdx}`}
                className="ml-3 text-sm text-gray-600"
              >
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
