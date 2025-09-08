import React, { Component, ChangeEvent, FormEvent } from "react";

interface State {
  studentName: string;
  email: string;
  password: string;
  phone: string;
  message: string;
}

class RegisterForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      studentName: "",
      email: "",
      password: "",
      phone: "",
      message: ""
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { studentName, email, password, phone } = this.state;

    if (!studentName || !email || !password) {
      this.setState({ message: "Tên, Email và Mật khẩu không được để trống!" });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const isExist = users.some((u: any) => u.email === email);
    if (isExist) {
      this.setState({ message: "Email đã tồn tại!" });
      return;
    }

    const newUser = { studentName, email, password, phone };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    this.setState({
      studentName: "",
      email: "",
      password: "",
      phone: "",
      message: "Đăng ký tài khoản thành công!"
    });

    const nameInput = document.getElementById("studentName") as HTMLInputElement;
    if (nameInput) nameInput.focus();
  };

  render() {
    const { studentName, email, password, phone, message } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Đăng ký tài khoản</h2>

        <input
          id="studentName"
          type="text"
          name="studentName"
          placeholder="Tên sinh viên"
          value={studentName}
          onChange={this.handleChange}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={this.handleChange}
        />
        <br />

        <input
          type="text"
          name="phone"
          placeholder="Số điện thoại"
          value={phone}
          onChange={this.handleChange}
        />
        <br />

        <button type="submit">Đăng ký</button>

        {message && <p>{message}</p>}
      </form>
    );
  }
}

export default RegisterForm;
