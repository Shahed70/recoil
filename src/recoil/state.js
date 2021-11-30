import { atom } from "recoil";

export const productList = atom({
  key: "productList",
  default:  [ {
    id: 1,
    title: "Product 1",
    price: 10,
    quantity: 1,
   
  },

  {
    id: 2,
    title: "Product 2",
    price: 12,
    quantity: 1,
  
  },

  {
    id: 3,
    title: "Product 3",
    price: 15,
    quantity: 1,
  
  },
],
  
});

