import React, { useState } from "react";

function ColorForm() {
  const [color, setColor] = useState("#000000"); 
  const [submittedColor, setSubmittedColor] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setSubmittedColor(color); 
  };

  return (
    <div>
      <h2>Color:</h2>
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <label>Màu sắc</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {submittedColor && (
        <div style={{ marginTop: "10px" }}>
          <p>Mã màu đã chọn: {submittedColor}</p>
          <div
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: submittedColor,
              border: "1px solid #000",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default ColorForm;
