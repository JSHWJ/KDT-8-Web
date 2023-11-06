import { createContext } from "react";

//Provider와 Consumer 두 개의 리액트 컴포넌트를 반환
const ProductListContext = createContext({
  add: [],
  setAdd: () => {},
});
const CartContext = createContext({
  cart: "",
  setCart: () => {},
});

const CartItemContext = createContext({
  cartItem: "",
  setCartItem: () => {},
});

export { ProductListContext, CartContext, CartItemContext };
