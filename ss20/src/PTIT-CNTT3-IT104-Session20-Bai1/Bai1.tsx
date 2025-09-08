import { useState } from "react";
import type { ChangeEvent } from "react";

export default function Bai1() {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Kiểm tra độ dài chuỗi</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập chuỗi..."
        style={{ padding: "8px", marginBottom: "10px", width: "250px" }}
      />
      {text.length > 5 && (
        <div style={{ color: "green" }}>
          Chuỗi bạn nhập có độ dài lớn hơn 5 ký tự
        </div>
      )}
    </div>
  );
}
