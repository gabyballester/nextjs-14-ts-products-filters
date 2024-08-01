"use client";

import { useProductFilter, useQueryProductData } from "@/hooks";
import { ApiProductType } from "@/db";
import { Filters, Header, ProductsGrid } from "@/components";

export default function Home() {
  const { filter, setFilter } = useProductFilter();
  const { data: products } = useQueryProductData<ApiProductType>({ filter });

  console.log(filter);
  

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Header
        title="High-quality cotton selection"
        setFilter={setFilter}
        filter={filter}
      />
      <section className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <Filters setFilter={setFilter} filter={filter} />
          <ProductsGrid data={products} />
        </div>
      </section>
    </main>
  );
}
