import React, { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function Bai2() {
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: 'Iphone 14',
    price: 30000000,
    quantity: 5
  });

  return (
    <div>
      <h1>Bài tập state cơ bản (object)</h1>
      <p>Tên sản phẩm: {product.name}</p>
      <p>Giá sản phẩm: {product.price} VNĐ</p>
      <p>Số lượng: {product.quantity}</p>
    </div>
  );
}
