import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"vietnamese" | "english">(
    "vietnamese"
  );

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>
        Nền: {theme === "light" ? "Sáng" : "Tối"}
      </h2>
      <h2>
        Ngôn ngữ: {language === "vietnamese" ? "Tiếng Việt" : "English"}
      </h2>

      <br />

      {/* Nút đổi theme */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Đổi theme
      </button>

      {/* Nút đổi language */}
      <button
        style={{ marginLeft: "10px" }}
        onClick={() =>
          setLanguage(language === "vietnamese" ? "english" : "vietnamese")
        }
      >
        Đổi ngôn ngữ
      </button>
    </div>
  );
}

export default App;
