import React, { Component, ChangeEvent, FormEvent } from "react";

interface State {
  email: string;
  password: string;
  message: string;
}

class LoginForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: ""
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ message: "Email và mật khẩu không được để trống!" });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const isValid = users.some(
      (u: any) => u.email === email && u.password === password
    );

    if (isValid) {
      this.setState({ message: "Đăng nhập thành công!" });
    } else {
      this.setState({ message: "Đăng nhập thất bại!" });
    }
  };

  render() {
    const { email, password, message } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Đăng nhập tài khoản</h2>

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

        <button type="submit">Đăng nhập</button>

        {message && <p>{message}</p>}
      </form>
    );
  }
}

export default LoginForm;
