import { Context, TContext } from "./store/context";
import { useContext } from "react";

export default function ThemeSelector() {
  const value = useContext(TContext);
  return (
    <>
      <div>
        <h2>현재 선택된 테마 : {value.theme}</h2>
        <select
          value={value.theme}
          onChange={(e) => value.setTheme(e.target.value)}
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </div>
    </>
  );
  //   }}
}
