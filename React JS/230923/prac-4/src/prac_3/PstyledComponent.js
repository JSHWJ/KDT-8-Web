import React, { useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  background-color: ${(props) => (props.clicked ? "blue" : "red")};
  color: ${(props) => (props.clicked ? "white" : "black")};
  padding: 10px 15px;
  border-radius: 4px;
  border-width: 0;
  cursor: pointer;
`;

export default function PstyledComponent() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <ToggleButton clicked={clicked} onClick={handleClick}>
        색상변경!
      </ToggleButton>
    </div>
  );
}
