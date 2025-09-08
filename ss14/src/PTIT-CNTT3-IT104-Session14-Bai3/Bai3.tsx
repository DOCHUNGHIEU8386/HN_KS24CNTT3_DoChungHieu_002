import React, { Component } from "react";

interface State {
  company: string;
}

class Company extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      company: "Rikkei Academy",
    };
  }

  changeCompany = () => {
    this.setState({ company: "RikkeiSoft" });
  };

  render() {
    return (
      <div>
        <h1>Company: {this.state.company}</h1>
        <button onClick={this.changeCompany}>Change state</button>
      </div>
    );
  }
}

export default Company;
