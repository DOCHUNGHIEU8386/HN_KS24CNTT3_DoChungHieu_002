import { useState } from "react";

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${dd}/${mm}/${yyyy} ${hh}:${mi}:${ss}`;
}

function Todolist() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Thiết kế giao diện Header",
      assign: "Nguyễn Văn A",
      status: false,
      created_at: new Date("2024-03-21T13:12:12"),
    },
    {
      id: 2,
      name: "Thiết kế giao diện Footer",
      assign: "Nguyễn Văn B",
      status: true,
      created_at: new Date("2024-03-21T15:10:50"),
    },
  ]);

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleStatus = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <table border={1} cellPadding={10} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên công việc</th>
            <th>Người thực hiện</th>
            <th>Trạng thái</th>
            <th>Thời gian tạo</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>{task.assign}</td>
              <td>
                {task.status ? (
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    Hoàn thành
                  </span>
                ) : (
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    Chưa hoàn thành
                  </span>
                )}
              </td>
              <td>{formatDate(task.created_at)}</td>
              <td>
                <button
                  style={{ marginRight: "5px", background: "orange" }}
                  onClick={() => handleToggleStatus(task.id)}
                >
                  Sửa
                </button>
                <button
                  style={{ background: "red", color: "white" }}
                  onClick={() => handleDelete(task.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;
