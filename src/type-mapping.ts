interface Shoe {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly [k in keyof T]: T[k];
};

type Optional<T> = {
  [k in keyof T]?: T[k];
};

type Nullable<T> = {
  [k in keyof T]: T[k] | null;
};

let product: ReadOnly<Shoe> = {
  name: "a",
  price: 1,
};
