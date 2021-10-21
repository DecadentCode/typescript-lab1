import { Product } from "./models/Products";

const products: Product[] = [
  {
    name: "computer",
    price: 2000,
  },
  {
    name: "monitor",
    price: 200,
  },
  {
    name: "keyboard",
    price: 40,
  },
  {
    name: "keyboard",
    price: 16,
  },
];

const calcAverageProductPrice = (productArray: Product[]) => {
  if (productArray.length > 0) {
    let sum = 0;
    productArray.forEach((product: Product) => {
      sum += product.price;
    });
    return sum / productArray.length;
  } else {
    return 0;
  }
};

console.log(calcAverageProductPrice(products));
