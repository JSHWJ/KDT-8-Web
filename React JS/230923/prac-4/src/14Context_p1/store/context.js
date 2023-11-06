import { createContext } from "react";

//Provider와 Consumer 두 개의 리액트 컴포넌트를 반환
const Context = createContext({
  language: "",
  setLanguage: () => {},
});

const TContext = createContext({
  theme: "",
  setTheme: () => {},
});

export { Context, TContext };
