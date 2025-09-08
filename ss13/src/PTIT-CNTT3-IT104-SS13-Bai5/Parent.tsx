import React, { useState } from "react";
import Children from "./Children";

function Parent() {
  const [product] = useState({
    id: 1,
    name: "Bưởi ba roi",
    price: "12.000 đ",
    quantity: 6
  });

  return (
    <div>
      <Children product={product} />
    </div>
  );
}

export default Parent;
