import React, { Component } from "react";

type State = {
  isDarkMode: boolean;
};

class ThemeSwitcher extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkMode: false, 
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;

    const themeStyle = {
      backgroundColor: isDarkMode ? "#222" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <div style={themeStyle}>
        <h2>
          {isDarkMode
            ? " Chế độ Tối đang bật"
            : " Chế độ Sáng đang bật"}
        </h2>
        <button onClick={this.toggleTheme}>Chuyển theme</button>
      </div>
    );
  }
}

export default ThemeSwitcher;
