
import React, { useState } from "react";

function RandomQuote() {
  const quotes = [
    "Yêu Tổ quốc, yêu đồng bào.",
    "Học tập tốt, lao động tốt.",
    "Đoàn kết tốt, kỷ luật tốt.",
    "Giữ gìn vệ sinh thật tốt.",
    "Khiêm tốn, thật thà, dũng cảm."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h2> 5 Điều Bác Hồ Dạy:</h2>
      <p>"{quote}"</p>
      <button onClick={getRandomQuote}>Lấy điều mới</button>
    </div>
  );
}

export default RandomQuote;
