
import React, { useRef } from "react";

function ScrollToSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={handleScroll}>Đi tới phần nội dung</button>

      {/*  */}
      <div style={{ height: "1000px" }}>
        <p>Đây là nội dung dài giả lập để tạo khoảng cách...</p>
        <p>Kéo xuống hoặc bấm nút để đi tới phần nội dung bên dưới.</p>
      </div>

      {/*  */}
      <div ref={sectionRef}>
        <h2> Đây là phần nội dung mục tiêu</h2>
        <p>Bạn đã cuộn tới đây bằng scrollIntoView().</p>
      </div>
    </div>
  );
}

export default ScrollToSection;
