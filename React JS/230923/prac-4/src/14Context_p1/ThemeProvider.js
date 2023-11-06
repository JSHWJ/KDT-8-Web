import { useState } from "react";
import { Context, TContext } from "./store/context";

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  return (
    <TContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </TContext.Provider>
  );
}
