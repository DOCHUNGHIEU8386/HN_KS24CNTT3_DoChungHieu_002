import React, { useState } from 'react';

export default function Bai2() {
  const [name, setName] = useState<string>('Hiếu');

  return (
    <div>
      <h1>Bài tập state cơ bản</h1>
      <p>Tên của tôi là: {name}</p>
    </div>
  );
}
