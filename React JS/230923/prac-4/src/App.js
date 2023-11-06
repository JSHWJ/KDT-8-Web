// import { Outlet } from "react-router-dom";
// import Header from "./12Router/Header";
// import Router from './Router';

import { useState } from "react";
import { Context, TContext } from "./14Context_p1/store/context";
import ProductSelector from "./14Context_p2/ProductSelector";
import ProductProvider from "./14Context_p2/ProductProvider";
import ProductList from "./ProductList";

function App() {
  // const [language, setLanguage] = useState("korean");
  // const [theme, setTheme] = useState("dark");
  return (
    <>
      <ProductList />
    </>
  );
}

export default App;
