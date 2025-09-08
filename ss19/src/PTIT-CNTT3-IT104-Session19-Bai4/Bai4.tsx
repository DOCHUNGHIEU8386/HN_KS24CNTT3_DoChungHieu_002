
import React, { useState, useEffect } from "react";

function BasicForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  useEffect(() => {
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Trường này là bắt buộc";
    }

    if (!email.trim()) {
      newErrors.email = "Trường này là bắt buộc";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email không hợp lệ";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [name, email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      alert("Gửi thành công!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2> Đăng ký thông tin</h2>

      <div>
        <label>
          Họ tên:
          <input
            type="text"
            placeholder="Nhập họ tên..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {errors.name && <p> {errors.name}</p>}
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && <p> {errors.email}</p>}
      </div>

      <button type="submit" disabled={!isValid}>
        Gửi
      </button>
    </form>
  );
}

export default BasicForm;
