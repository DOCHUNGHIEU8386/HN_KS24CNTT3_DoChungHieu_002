import React, { useState } from 'react';

export default function Checkbox() {
  const [selected, setSelected] = useState<string[]>([]);

  const hobbies = ['Đi chơi', 'Đá bóng', 'Code', 'Rap'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div>
      <h1>Chọn sở thích của bạn</h1>

      {hobbies.map((hobby) => (
        <div key={hobby}>
          <label>
            <input
              type="checkbox"
              value={hobby}
              checked={selected.includes(hobby)}
              onChange={handleChange}
            />
            {hobby}
          </label>
        </div>
      ))}

      <p>Sở thích đã chọn: {selected.join(', ') || 'Chưa chọn'}</p>
    </div>
  );
}
