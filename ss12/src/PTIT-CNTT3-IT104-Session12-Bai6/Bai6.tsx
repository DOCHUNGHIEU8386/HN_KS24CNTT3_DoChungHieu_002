import React from 'react';

const AdminIndex: React.FC = () => {
  const headerStyle = {
    backgroundColor: '#ccc',
    padding: '10px',
  };

  const menuStyle = {
    width: '200px',
    backgroundColor: '#1e3a5f',
    color: 'white',
    padding: '20px',
    height: '100vh',
  };

  const mainStyle = {
    padding: '20px',
    flex: 1,
  };

  const footerStyle = {
    backgroundColor: '#ccc',
    padding: '10px',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <div style={headerStyle}>
        <h1>Header</h1>
      </div>
      
      {/* */}
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={menuStyle}>
          <ul>
            <li>Menu</li>
          </ul>
        </div>
        <div style={mainStyle}>
          <h2>Main</h2>
        </div>
      </div>
      
      {/* Footer */}
      <div style={footerStyle}>
        <p>Footer</p>
      </div>
    </div>
  );
};

export default AdminIndex;
