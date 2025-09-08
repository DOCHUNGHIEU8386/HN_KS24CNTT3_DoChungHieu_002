import React, { Component } from "react";

interface State {
  slogan: string;
}

class Slogan extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      slogan: "Học code để đi làm",
    };
  }

  changeSlogan = () => {
    this.setState({ slogan: "Học code sẽ thành công. Cố lên!!!" });
  };

  shouldComponentUpdate(nextProps: {}, nextState: State): boolean {
    console.log("State mới:", nextState.slogan);
    return false;
  }

  render() {
    return (
      <div>
        <h1>Slogan: "{this.state.slogan}"</h1>
        <button onClick={this.changeSlogan}>Change state</button>
      </div>
    );
  }
}

export default Slogan;
