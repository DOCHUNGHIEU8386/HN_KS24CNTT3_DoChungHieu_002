import React, { useState } from 'react';

export default function Select() {
  const [city, setCity] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1>Lấy giá trị trong select-option</h1>

      <select value={city} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        <option value="Đà Nẵng">Đà Nẵng</option>
        <option value="Hải Phòng">Hải Phòng</option>
      </select>

      {city && <p>Bạn đã chọn: {city}</p>}
    </div>
  );
}
