import React from "react";

function InputForm({ weight, setWeight, height, setHeight, calculateBMI }) {
  return (
    <form>
      <label>
        Weight:
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Height:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
    </form>
  );
}

export default InputForm;
