import { useState } from "react";

export default function ListFunc() {
  const [status, setStatus] = useState({
    work: "",
    tableData: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStatus((prevStatus) => ({
      ...prevStatus,
      [name]: value,
    }));
  };

  const addContent = () => {
    const { work, tableData } = status;

    if (work) {
      const newItem = {
        work,
      };

      setStatus({
        tableData: [...tableData, newItem],
        work: "",
      });
    }
  };

  const cleanContent = () => {
    const updatedTableData = status.tableData.filter((item) => !item.completed);

    setStatus({
      tableData: updatedTableData,
      work: "",
    });
  };

  const toggleCompleted = (index) => {
    const updatedTableData = [...status.tableData];
    updatedTableData[index].completed = !updatedTableData[index].completed;

    setStatus({
      tableData: updatedTableData,
      work: "",
    });
  };

  const { work, tableData } = status;

  return (
    <>
      <input
        type="text"
        name="work"
        value={work}
        onChange={handleInputChange}
        placeholder="할 일 입력..."
      />
      <button onClick={addContent}>추가</button>

      <div>
        {tableData.map((item, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                name="work"
                checked={item.completed}
                onChange={() => toggleCompleted(index)}
              />
              {item.work}
            </label>
          </div>
        ))}

        <button onClick={cleanContent}>완료된 할 일 삭제</button>
      </div>
    </>
  );
}
