import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { QueryResult } from "@upstash/vector";
import { FilterType } from "@/types";

export function useQueryProductData<T>({ filter }: { filter: FilterType }) {
  return useQuery<QueryResult<T>[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.post<QueryResult<T>[]>(
        "http://localhost:3000/api/products",
        {
          filter: {
            sort: filter.sort,
          },
        }
      );

      return data;
    },
  });
}
