function Product(name: string, price: number) {
  this.name = name;
  this.price = price;
}

function Toy(name: string, price: number) {
  Product.call(this, name, price);
  this.category = 'toy';
}
type Animal = {
  species: string;
  name: string;
};
const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' },
];

const printEach = (arr: Animal[]) => {
  const result: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    (function (i: number) {
      this.print = function () {
        result.push('#' + i + ' ' + this.species + ': ' + this.name);
      };
      this.print();
    }.call(arr[i], i));
  }
  return result;
};

export { printEach, animals, Toy };
