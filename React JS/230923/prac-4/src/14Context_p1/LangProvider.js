import { useState } from "react";

import { Context, TContext } from "./store/context";
export default function LangProvider(props) {
  const [language, setLanguage] = useState("korean");

  return (
    <Context.Provider value={{ language, setLanguage }}>
      {props.children}
    </Context.Provider>
  );
}
