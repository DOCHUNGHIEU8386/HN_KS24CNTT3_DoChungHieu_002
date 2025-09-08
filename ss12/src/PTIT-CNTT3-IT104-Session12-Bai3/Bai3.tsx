import React from 'react';

interface User {
  fullName: string;
  gender: string;
  birthDate: string;
  email: string;
  address: string;
}

const user: User = {
  fullName: "Nguyễn Văn A",
  gender: "Nam",
  birthDate: "06/03/2024",
  email: "nva@gmail.com",
  address: "Thanh Xuân, Hà Nội",
};

const UserInfo: React.FC = () => {
  return (
    <div className="user-info">
      <h1>Thông tin cá nhân</h1>
      <ul>
        <li>Họ và tên: {user.fullName}</li>
        <li>Giới tính: {user.gender}</li>
        <li>Ngày sinh: {user.birthDate}</li>
        <li>Email: {user.email}</li>
        <li>Địa chỉ: {user.address}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
