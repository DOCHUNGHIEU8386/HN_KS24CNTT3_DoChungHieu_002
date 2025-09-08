import { useState } from "react";

interface Student {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: "active" | "inactive";
}

export default function StudentManagement() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "SV001",
      name: "Nguyễn Văn A",
      dob: "2023-12-21",
      email: "nva@gmail.com",
      status: "active",
    },
    {
      id: "SV002",
      name: "Nguyễn Thị B",
      dob: "2022-11-21",
      email: "ntb@gmail.com",
      status: "inactive",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;
  const totalPages = Math.ceil(students.length / studentsPerPage);

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newStudent: Student = {
      id: "SV" + Math.floor(Math.random() * 1000),
      name,
      dob,
      email,
      status: "active",
    };
    setStudents([...students, newStudent]);
    setName("");
    setDob("");
    setEmail("");
  };

  const currentStudents = students.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Quản lý sinh viên</h2>

      {/* Form thêm mới */}
      <form onSubmit={handleAdd}>
        <input
          placeholder="Tên sinh viên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Thêm mới</button>
      </form>

      {/* Bảng sinh viên */}
      <table border={1} cellPadding={10} style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student, index) => (
            <tr key={student.id}>
              <td>{(currentPage - 1) * studentsPerPage + index + 1}</td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.dob}</td>
              <td>{student.email}</td>
              <td>
                {student.status === "active" ? (
                  <span style={{ color: "green" }}>Đang hoạt động</span>
                ) : (
                  <span style={{ color: "red" }}>Ngừng hoạt động</span>
                )}
              </td>
              <td>
                <button>Chặn</button>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phân trang */}
      <div style={{ marginTop: 20 }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            style={{
              margin: 5,
              backgroundColor: page === currentPage ? "blue" : "white",
              color: page === currentPage ? "white" : "black",
            }}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
