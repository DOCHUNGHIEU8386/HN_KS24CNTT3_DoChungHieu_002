import React, { Component } from "react";

type State = {
  subjects: string[];
};

class SubjectList extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      subjects: ["Toán", "Văn", "Anh", "Hóa", "Sinh"],
    };
  }

  render() {
    return (
      <div>
        <h2>Danh sách môn học</h2>
        <ul>
          {this.state.subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SubjectList;
