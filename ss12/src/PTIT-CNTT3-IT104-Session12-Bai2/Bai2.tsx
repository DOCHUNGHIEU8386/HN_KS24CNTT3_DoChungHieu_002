import React from 'react';

const Calculation: React.FC = () => {

  const add = (a: number, b: number) => {
    return a + b;
  };

  const subtract = (a: number, b: number) => {
    return a - b;
  };

  const multiply = (a: number, b: number) => {
    return a * b;
  };

  const divide = (a: number, b: number) => {
    return b !== 0 ? a / b : 'Không thể chia cho 0';
  };

  return (
    <div className="calculation">
      <h1>Danh sách kết quả</h1>
      <ul>
        <li>10 + 10 = {add(10, 10)}</li>
        <li>10 - 10 = {subtract(10, 10)}</li>
        <li>10 * 10 = {multiply(10, 10)}</li>
        <li>10 / 10 = {divide(10, 10)}</li>
      </ul>
    </div>
  );
};

export default Calculation;
