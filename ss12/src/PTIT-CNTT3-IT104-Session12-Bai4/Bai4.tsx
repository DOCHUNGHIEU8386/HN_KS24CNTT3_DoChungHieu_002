import React from 'react';

interface ColorBoxProps {
  color: string; 
  label: string; 
}

const ColorBox: React.FC<ColorBoxProps> = ({ color, label }) => {
  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', 
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px',
  };

  const labelStyle = {
    textAlign: 'center',
    fontSize: '16px',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={boxStyle}>
        Box
      </div>
      <div style={labelStyle}>{label}</div>
    </div>
  );
};

export default ColorBox;
