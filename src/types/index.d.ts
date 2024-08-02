export type PriceFilterType = {
  readonly id: "price";
  readonly name: "Price";
  readonly options: readonly [
    {
      readonly value: readonly [0, 100];
      readonly label: "Any price";
    },
    {
      readonly value: readonly [0, 20];
      readonly label: "Under 20€";
    },
    {
      readonly value: readonly [number, number];
      readonly label: "Under 40€";
    }
  ];
};

export type DebouncedFilter<T> = DebouncedFunc<
  () => Promise<QueryObserverResult<QueryResult<T>[], Error>>
>;

export type SetStateActionType<T> = Dispatch<SetStateAction<T>>;
