import { useEffect } from 'react';

function Welcome() {
  useEffect(() => {
    console.log("Component Welcome vừa được render lần đầu!");
  }, []); 

  return (
    <div>
      <h1>Xin chào!</h1>
      <p>Chào mừng bạn đến với ứng dụng React của chúng tôi.</p>
    </div>
  );
}

export default Welcome;
