import React, { useState } from "react";

const Bai2 = () => {
  const [id] = useState(1);
  const [ten] = useState("Đỗ Chung Hiếu");
  const [ngaySinh] = useState("01/01/2000");
  const [diaChi] = useState("Hà Nội, Việt Nam");

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Tên:</strong> {ten}</p>
      <p><strong>Ngày sinh:</strong> {ngaySinh}</p>
      <p><strong>Địa chỉ:</strong> {diaChi}</p>
    </div>
  );
};

export default Bai2;
