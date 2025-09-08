import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false); 
  const inputRef = useRef(null); 

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]); 

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <h1>Demo Modal với input focus</h1>
      <button onClick={openModal}>Mở Modal</button>

      {isOpen && (
        <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
          <h2>Modal</h2>
          <input
            ref={inputRef}
            type="text"
            placeholder="Nhập văn bản"
          />
          <br />
          <button onClick={closeModal}>Đóng Modal</button>
        </div>
      )}
    </div>
  );
}

export default App;
