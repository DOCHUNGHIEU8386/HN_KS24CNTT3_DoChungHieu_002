import React, { Component, ChangeEvent, FormEvent } from "react";

interface State {
  gender: string;
}

class GenderForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      gender: "" 
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Giới tính được chọn:", this.state.gender);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Giới tính: {this.state.gender}</p>

        <label>
          <input
            type="radio"
            name="gender"
            value="Nam"
            checked={this.state.gender === "Nam"}
            onChange={this.handleChange}
          />
          Nam
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Nữ"
            checked={this.state.gender === "Nữ"}
            onChange={this.handleChange}
          />
          Nữ
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Khác"
            checked={this.state.gender === "Khác"}
            onChange={this.handleChange}
          />
          Khác
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default GenderForm;
