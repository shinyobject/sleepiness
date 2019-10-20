import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ButtonsRaw = ({ className, label, value, change, index }) => {
  const [selected, setSelected] = useState(-1);
  useEffect(() => {
    change(index, selected);
  }, [selected]);

  console.log("value " + value);
  return (
    <div className={`Scale ${className}`}>
      <label>{label}</label>

      <div className="buttons">
        <div
          className={selected == 0 ? "active" : ""}
          onClick={() => setSelected(0)}
        >
          0
        </div>
        <div
          className={selected == 1 ? "active" : ""}
          onClick={() => setSelected(1)}
        >
          1
        </div>
        <div
          className={selected == 2 ? "active" : ""}
          onClick={() => setSelected(2)}
        >
          2
        </div>
        <div
          className={selected == 3 ? "active" : ""}
          onClick={() => setSelected(3)}
        >
          3
        </div>
      </div>
    </div>
  );
};
const Buttons = styled(ButtonsRaw)`
  display: flex;
  flex-direction: column;
  label {
    font-weight: 700;
  }
  .legend {
    display: flex;
    justify-content: space-between;
  }
  input {
    -webkit-tap-highlight-color: transparent;
  }
  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
  }
  .buttons div {
    padding: 20px 0;
    text-align: center;
    border: 2px solid #333;
    border-radius: 10px;
    background: #fff;
  }
  .buttons div:hover {
    cursor: pointer;
  }
  .buttons div.active {
    background: #03a9fc;
    border-color: #03a9fc;
    color: #fff;
  }
`;

export default Buttons;
