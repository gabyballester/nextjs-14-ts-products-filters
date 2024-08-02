import { ProductState } from "@/lib";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";

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

const COLOR_FILTERS = {
  id: "color",
  name: "Color",
  options: [
    { value: "white", label: "White" },
    { value: "beige", label: "Beige" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "purple", label: "Purple" },
  ] as const,
};

export const ColorFilter = ({ applyArrayFilter, filter }: Props) => {
  return (
    <AccordionItem value="color">
      <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
        <span className="font-medium text-gray-900">Color</span>
      </AccordionTrigger>
      <AccordionContent className="pt-6 animate-none">
        <ul className="space-y-4">
          {COLOR_FILTERS.options.map((option, optionIdx) => (
            <li key={option.value} className="flex items-center">
              <input
                type="checkbox"
                id={`color-${optionIdx}`}
                onChange={() => {
                  applyArrayFilter({
                    category: "color",
                    value: option.value,
                  });
                }}
                checked={filter.color.includes(option.value)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={`color-${optionIdx}`}
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
