import React, { useState } from 'react';

export default function Form() {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>Bài tập lấy giá trị trong input (TSX)</h1>
      <input
        type="text"
        placeholder="Nhập gì nhập nhanh đi..."
        value={value}
        onChange={handleChange}
      />
      <p>Giá trị hiện tại: {value}</p>
    </div>
  );
}
