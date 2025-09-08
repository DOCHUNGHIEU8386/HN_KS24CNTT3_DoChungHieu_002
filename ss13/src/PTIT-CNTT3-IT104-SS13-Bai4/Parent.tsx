import React, { useState } from "react";
import Child from "./Child";

const Parent: React.FC = () => {
  const [name, setName] = useState("Đỗ Chung Hiếu");

  return (
    <div>
      <h2>Component cha</h2>
      <p>Họ và tên bên component cha: {name}</p>

      {/* Truyền state name xuống component con */}
      <Child name={name} />
    </div>
  );
};

export default Parent;
