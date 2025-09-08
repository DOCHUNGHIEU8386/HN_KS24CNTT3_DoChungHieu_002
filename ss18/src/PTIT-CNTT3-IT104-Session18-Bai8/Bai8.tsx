import React, { useReducer, useEffect, useState } from "react";

type Job = {
  id: number;
  name: string;
};

const todoReducer = (state: Job[], action: { type: string; payload?: any }) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter(job => job.id !== action.payload);
    case "SET":
      return action.payload;
    default:
      return state;
  }
};

export default function Bai7() {
  const [jobName, setJobName] = useState("");
  const [jobs, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) {
      dispatch({ type: "SET", payload: JSON.parse(storedJobs) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = () => {
    if (!jobName.trim()) return;
    const newJob: Job = {
      id: Date.now(),
      name: jobName.trim(),
    };
    dispatch({ type: "ADD", payload: newJob });
    setJobName("");
  };

  const deleteJob = (id: number) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa công việc này?");
    if (confirmDelete) {
      dispatch({ type: "DELETE", payload: id });
    }
  };

  return (
    <div>
      <h1>Quản lý công việc</h1>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={jobName}
        onChange={e => setJobName(e.target.value)}
      />
      <button onClick={addJob}>Thêm</button>

      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            {job.name}{" "}
            <button onClick={() => deleteJob(job.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
