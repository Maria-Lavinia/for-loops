const names = ["Maria", "Ana", "Iulia", "Reka"];

names.forEach((name) => {
  console.log(name);
});

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {}
}

const things = ["Peter", 7, "Marianne", true, "Helle", 8];

things.forEach((thing) => {
  console.log(thing + " is a " + typeof thing);
});

const products = [
  {
    name: "milk",
    price: "10",
    quantityInStock: "3",
  },

  {
    name: "wine",
    price: "10",
    quantityInStock: "3",
  },
  {
    name: "coffee",
    price: "10",
    quantityInStock: "3",
  },
];

products.forEach((product) => {
  console.log(product);
  console.log(product.quantityInStock * products.length);
});

function findLargest(a, b, c, d) {
  return Math.max(a, b, c, d);
}

console.log(findLargest(9, 12, 65, 98));
