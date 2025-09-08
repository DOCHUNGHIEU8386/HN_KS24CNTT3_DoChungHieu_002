import { Button } from "antd";

function Buttons() {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button type="primary">Lưu</Button>
      <Button>Hủy</Button>
      <Button
        style={{ background: "green", color: "#fff", border: "none" }}
      >
        Thành công
      </Button>
      <Button
        style={{ background: "gold", color: "#000", border: "none" }}
      >
        Cảnh báo
      </Button>
      <Button danger>Báo lỗi</Button>
      <Button
        style={{ background: "deepskyblue", color: "#fff", border: "none" }}
      >
        Thông tin
      </Button>
      <a href="#" style={{ alignSelf: "center" }}>
        Đường dẫn
      </a>
    </div>
  );
}

export default Buttons;
