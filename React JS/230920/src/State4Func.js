import { useState } from "react";

export default function State4Func() {
  const [status, setStatus] = useState({
    inputWriter: "", //작성자
    inputTitle: "", //제목
    comments: [], //입력한 내용
    inputSearch: "", //검색내용
    searchType: "title", //검색타입
    results: [], //검색결과
  });

  const onChange = (e) => {
    //console.log(e.target);
    setStatus((prevStatus) => ({
      ...prevStatus,
      inputWriter: e.target.value,
    }));
  };

  const addComment = () => {
    const newComment = {
      writer: status.inputWriter,
      title: status.inputTitle,
    };
    setStatus((prevStatus) => ({
      ...prevStatus,
      comments: [...status.comments, newComment],
      inputTitle: "",
      inputWriter: "",
    }));
  };

  const searchComment = () => {
    const searchResult = status.comments.filter((value) => {
      console.log(value[status.searchType]);
      console.log(value[status.searchType].includes(status.inputSearch));
      const type = value[status.searchType];
      const include = type.includes(status.inputSearch);
      if (!include) {
        return false;
      }
      return true;
    });
    setStatus((prevStatus) => ({
      ...prevStatus,
      results: searchResult,
    }));
  };

  const {
    inputWriter,
    inputTitle,
    comments,
    inputSearch,
    searchType,
    results,
  } = status;
  return (
    <>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) =>
            setStatus((prevStatus) => ({
              ...prevStatus,
              inputTitle: e.target.value,
            }))
          }
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <form>
        <select
          value={searchType}
          onChange={(e) =>
            setStatus((prevStatus) => ({
              ...prevStatus,
              searchType: e.target.value,
            }))
          }
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) =>
            setStatus((prevStatus) => ({
              ...prevStatus,
              inputSearch: e.target.value,
            }))
          }
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {/* [ {title, writer},{title, writer},{title, writer}... ] */}
          {comments.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>검색결과</h4>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {results.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
