import React, { Component, ChangeEvent, FormEvent } from "react";

type State = {
  name: string;
  email: string;
  age: string; 
  error: string;
  submittedData: {
    name: string;
    email: string;
    age: number;
  } | null;
};

class UserForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      error: "",
      submittedData: null,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, age } = this.state;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", submittedData: null });
      return;
    }
    if (parseInt(age) < 0) {
      this.setState({ error: "Tuổi không được âm", submittedData: null });
      return;
    }

    this.setState({
      error: "",
      submittedData: {
        name,
        email,
        age: parseInt(age),
      },
    });
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
      error: "",
      submittedData: null,
    });
  };

  render() {
    const { name, email, age, error, submittedData } = this.state;

    return (
      <div>
        <h2>Form nhập thông tin người dùng</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Họ tên: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Tuổi: </label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Gửi</button>
          <button type="button" onClick={this.handleReset}>
            Xóa tất cả
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {submittedData && (
          <div>
            <h3>Thông tin đã nhập:</h3>
            <p>Họ tên: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Tuổi: {submittedData.age}</p>
          </div>
        )}
      </div>
    );
  }
}

export default UserForm;
