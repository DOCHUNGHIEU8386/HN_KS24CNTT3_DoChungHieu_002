import React, { useState } from 'react';

export default function ChangeColor() {
  const [color, setColor] = useState<string>('black');

  const handleChangeColor = () => {
    setColor(color === 'black' ? 'red' : 'black');
  };

  return (
    <div>
      <h1 style={{ color: color }}>Đây là văn bản màu {color}</h1>
      <button onClick={handleChangeColor}>Đổi màu chữ</button>
    </div>
  );
}
