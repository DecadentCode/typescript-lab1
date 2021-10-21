import { InventoryItem } from "./models/InventoryItem";

const inventory: InventoryItem[] = [
  {
    product: {
      name: "motor",
      price: 10,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1,
    },
    quantity: 20,
  },
];

const calcInventoryValue = (inventoryArray: InventoryItem[]) => {
  let totalPrice = 0;
  inventoryArray.forEach((item: InventoryItem) => {
    totalPrice += item.product.price * item.quantity;
  });
  return totalPrice;
};

console.log(calcInventoryValue(inventory));
