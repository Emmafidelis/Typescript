interface Products {
  name: string;
  price: number;
}

class Stores<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Stores<Products>();
store.add({
  name: "a",
  price: 45,
});
store.find("name", "a");
store.find("price", 1);
