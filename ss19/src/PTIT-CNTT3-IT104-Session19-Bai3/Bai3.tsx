
import React, { useState, useRef, useEffect } from "react";

function RenderCounter() {
  const [value, setValue] = useState("");      
  const renderCount = useRef(0);               

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <h2> Component Render Counter</h2>
      <div>
        <label>
          Input:{" "}
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </div>
      <p>Component đã render: {renderCount.current} lần</p>
    </div>
  );
}

export default RenderCounter;
