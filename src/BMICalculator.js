import React, { useState } from "react";
import BMICard from "./BMICard";
import HistoryList from "./HistoryList";
import InputForm from "./InputForm";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [date, setDate] = useState("");
  const [history, setHistory] = useState([]);

  const calculateBMI = () => {
    const bmiValue = weight / (height * height);
    setBMI(bmiValue);
    setDate(new Date());
    setHistory([...history, { weight, height, bmi: bmiValue, date }]);
  };

  const deleteItem = (index) => {
    setHistory(history.filter((item, i) => i !== index));
  };

  return (
    <div>
      <InputForm
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        calculateBMI={calculateBMI}
      />
      <BMICard bmi={bmi} date={date} />

      <HistoryList history={history} deleteItem={deleteItem} />
    </div>
  );
}

export default BMICalculator;
