import React from "react";
import styled from "styled-components";

const ScaleRaw = ({ className, label, value, change, index }) => {
  console.log("value " + value);
  return (
    <div className={`Scale ${className}`}>
      <label>{label}</label>
      <div className="legend">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <input
        type="range"
        min="0"
        max="3"
        step="1"
        value={value}
        onChange={e => change(index, e.target.value)}
      />
    </div>
  );
};
const Scale = styled(ScaleRaw)`
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
`;

export default Scale;
