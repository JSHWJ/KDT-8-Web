import { useState } from "react";

import {
  ProductListContext,
  CartContext,
  CartItemContext,
} from "./store/context";

export default function ProductProvider(props) {
  const [add, setAdd] = useState([]);

  return (
    <>
      <ProductListContext.Provider value={{ add, setAdd }}>
        {props.children}
      </ProductListContext.Provider>
    </>
  );
}
