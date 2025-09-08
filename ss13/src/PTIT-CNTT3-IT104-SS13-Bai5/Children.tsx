import React from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface Props {
  product: Product;
}

function Children({ product }: Props) {
  return (
    <div>
      <h2>Dữ liệu trong component con</h2>
      <p>Id: {product.id}</p>
      <p>Product name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
}

export default Children;
