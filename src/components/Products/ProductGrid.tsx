import React from "react";
import { QueryResult } from "@upstash/vector";
import { ApiProductType } from "@/db";
import { Product } from "./Product";

interface Props {
  data: QueryResult<ApiProductType>[] | undefined;
}

export const ProductGrid = ({ data }: Props) => {
  return (
    <ul className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {data?.map((product) => (
        <Product key={product.id} product={product.metadata!} />
      ))}
    </ul>
  );
};
