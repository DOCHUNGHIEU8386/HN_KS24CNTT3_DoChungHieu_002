import React, { useState } from 'react';

export default function Toggle() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? 'Ẩn tiêu đề' : 'Hiện tiêu đề'}
      </button>
      {isVisible && <h1>Đây là tiêu đề</h1>}
    </div>
  );
}
