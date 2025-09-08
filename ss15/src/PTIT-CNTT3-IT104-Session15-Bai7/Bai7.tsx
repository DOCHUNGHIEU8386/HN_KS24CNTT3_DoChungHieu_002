import React, { Component } from "react";

interface ClockState {
  time: Date;
}

class Clock extends Component<{}, ClockState> {
  private timerId?: ReturnType<typeof setInterval>;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div>
        <h2>Thời gian hiện tại:</h2>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
