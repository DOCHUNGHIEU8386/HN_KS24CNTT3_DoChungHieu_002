import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('Timer đã dừng khi component unmount');
    };
  }, []); 

  return (
    <div>
      <h2>Bộ đếm: {count}</h2>
    </div>
  );
}

export default Timer;
