import React from 'react';

const HistoryList = ({ history, deleteItem }) => {
  return (
    <ul>
      {history.map((item, index) => (
        <li key={index}>
          Weight: {item.weight} kg
          <br />
          Height: {item.height} m
          <br />
          BMI: {item.bmi}
          <br />
          Date: {item.date.toString()}
          <button onClick={() => deleteItem(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};


export default HistoryList;


