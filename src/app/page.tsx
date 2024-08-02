"use client";

import { useCallback } from "react";
import { debounce } from "lodash";
import { useProductFilter, useQueryProductData } from "@/hooks";
import { ApiProductType } from "@/db";
import { Filters, Header, ProductsGrid } from "@/components";
import { DebouncedFilter } from "@/types";

export default function Home() {
  const { filter, setFilter } = useProductFilter();
  const { data: products, refetch } = useQueryProductData<ApiProductType>({
    filter,
  });

  const onSubmit = () => refetch();
  const handleDebouncedSubmit = debounce(onSubmit, 1000);
  const debouncedSubmit: DebouncedFilter<ApiProductType> = useCallback(
    handleDebouncedSubmit,
    []
  );

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Header
        title="High-quality cotton selection"
        setFilter={setFilter}
        filter={filter}
      />
      <section className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <Filters
            debouncedSubmit={debouncedSubmit}
            setFilter={setFilter}
            filter={filter}
          />
          <ProductsGrid data={products} />
        </div>
      </section>
    </main>
  );
}
