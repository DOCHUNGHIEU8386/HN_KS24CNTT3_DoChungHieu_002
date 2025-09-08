import React, { useState } from 'react';

export default function CounText() {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Ứng dụng đếm số ký tự</h1>

      <textarea
        placeholder="Nhập văn bản ở đây..."
        value={text}
        onChange={handleChange}
        rows={5}
        cols={50}
      />

      <p>Số ký tự hiện tại: {text.length}</p>
    </div>
  );
}
