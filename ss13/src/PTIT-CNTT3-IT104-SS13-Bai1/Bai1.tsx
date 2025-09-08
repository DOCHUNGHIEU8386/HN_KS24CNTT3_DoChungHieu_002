import React, { Component } from "react";

type InitialState = {
  fullName: string;
};

export default class Exercises01 extends Component<{}, InitialState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fullName: "Đỗ Chung Hiếu",
    };
  }

  render() {
    return (
      <div>
        <h1>Bài tập 1: State và Render dữ liệu</h1>
        <p>Tên của mình là: {this.state.fullName}</p>
      </div>
    );
  }
}
