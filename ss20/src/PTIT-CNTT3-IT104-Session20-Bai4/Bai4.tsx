import { useState, useEffect } from 'react';

function PageTitle() {
  const [name, setName] = useState('');

  useEffect(() => {
    if (name) {
      document.title = `Chào ${name}!`;
    } else {
      document.title = "Trang của bạn";
    }
  }, [name]);

  return (
    <div>
      <h1>Nhập tên của bạn:</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tên của bạn"
      />
    </div>
  );
}

export default PageTitle;
