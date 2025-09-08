
import React, { useState, useEffect } from "react";

function KeyTracker() {
  const [key, setKey] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h2> Phím bạn vừa nhấn:</h2>
      <h1>{key ? key : "Chưa nhấn phím nào"}</h1>
    </div>
  );
}

export default KeyTracker;
