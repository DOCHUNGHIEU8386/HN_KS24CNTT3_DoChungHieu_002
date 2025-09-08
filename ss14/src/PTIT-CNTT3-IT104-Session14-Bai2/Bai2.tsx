
import React, { Component } from "react";

class Notification extends Component<{}, {}> {
  componentDidMount(): void {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        <h2>Xin chào, đây là Notification Component!</h2>
      </div>
    );
  }
}

export default Notification;

