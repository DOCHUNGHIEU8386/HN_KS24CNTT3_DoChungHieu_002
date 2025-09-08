import React, { useState } from "react";

function ProgressForm() {
  const [progress, setProgress] = useState(0); 
  const [submittedProgress, setSubmittedProgress] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setSubmittedProgress(progress); 
  };

  return (
    <div>
      <h3>Tiến độ hoàn thành: %</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

     
      {submittedProgress !== null && (
        <p>Tiến độ đã chọn: {submittedProgress}%</p>
      )}
    </div>
  );
}

export default ProgressForm;
