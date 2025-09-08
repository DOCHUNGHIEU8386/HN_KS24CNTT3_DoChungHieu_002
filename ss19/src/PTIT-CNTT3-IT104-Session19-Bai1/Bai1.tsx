
import React, { useMemo } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const cartItems: CartItem[] = [
  { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
  { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
];

function ShoppingCart() {
  const total = useMemo(() => {
    console.log("Recalculate total...");
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div>
      <h2>Bài 1: Giỏ hàng</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} x {item.quantity} ={" "}
            {item.price * item.quantity} VND
          </li>
        ))}
      </ul>
      <h3>Tổng cộng: {total} VND</h3>
    </div>
  );
}

export default ShoppingCart;
