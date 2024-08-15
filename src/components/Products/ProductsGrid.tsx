import React from "react";
import { QueryResult } from "@upstash/vector";
import { ApiProductType } from "@/db";
import { Product } from "./Product";
import { ProductSkeleton } from "./ProductSkeleton";
import { EmptyState } from "./EmptyState";

interface Props {
  data: QueryResult<ApiProductType>[] | undefined;
}

export const ProductsGrid = ({ data }: Props) => {
  return (
    <ul className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {data && data.length === 0 ? (
        <EmptyState />
      ) : data ? (
        data.map((product) => (
          <Product key={product.id} product={product.metadata!} />
        ))
      ) : (
        new Array(12).fill(null).map((_, i) => <ProductSkeleton key={i} />)
      )}
    </ul>
  );
};
