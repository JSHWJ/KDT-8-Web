import { Context, TContext } from "./store/context";
import { useContext } from "react";

export default function LangSelector() {
  const value = useContext(Context);
  return (
    <>
      <div>
        <h2>현재 선택된 언어 : {value.language}</h2>
        <select
          value={value.language}
          onChange={(e) => value.setLanguage(e.target.value)}
        >
          <option value="korean">한국어</option>
          <option value="english">영어</option>
        </select>
      </div>
    </>
  );
  //   }}
}
