"use client";

import { ApiProductType } from "@/db";
import { Header, ProductGrid } from "@/components";
import { useProductFilter, useQueryProductData } from "@/hooks";

export default function Home() {
  const { filter, updateFilter } = useProductFilter();
  const { data: products } = useQueryProductData<ApiProductType>({ filter });

  return (
    <>
      <Header
        title="High-quality cotton selection"
        updateFilter={updateFilter}
        filter={filter}
      />
      <main className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <div>Filters</div>
          <ProductGrid data={products} />
        </div>
      </main>
    </>
  );
}
