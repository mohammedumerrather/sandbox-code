import React from "react";

function BMICard({ bmi, date }) {
  return (
    <div>
      <p>BMI: {bmi}</p>
      <p>Date: {date.toString()}</p>
    </div>
  );
}

export default BMICard;
