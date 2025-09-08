import React, { useState } from "react";

function BirthdayForm() {
  const [birthday, setBirthday] = useState("");
  const [submittedBirthday, setSubmittedBirthday] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setSubmittedBirthday(birthday); 
  };

  return (
    <div>
      <h3>Ngày sinh:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      
      {submittedBirthday && (
        <p>Ngày sinh đã nhập: {submittedBirthday}</p>
      )}
    </div>
  );
}

export default BirthdayForm;
