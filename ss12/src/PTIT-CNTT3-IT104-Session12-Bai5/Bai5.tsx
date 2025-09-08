import React from 'react';

interface User {
  firstName: string;
  lastName: string;
}

const formatName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`;
}

const FormatName: React.FC = () => {
  const user = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  return (
    <div className="format-name">
      <h1>Xin chào, {formatName(user)}!</h1>
    </div>
  );
};

export default FormatName;
