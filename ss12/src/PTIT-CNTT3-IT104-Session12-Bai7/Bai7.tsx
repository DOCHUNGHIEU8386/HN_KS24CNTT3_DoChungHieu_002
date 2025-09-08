import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Navbar from './Navbar';
import Main from './Main';
import Cart from './Cart';
import Article from './Article';

const UserLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Navigation và Main */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Menu */}
        <Menu />

        {/* Nội dung chính  */}
        <div style={{ flex: 1 }}>
          <Navbar />
          <div style={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </div>
          <Article />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
