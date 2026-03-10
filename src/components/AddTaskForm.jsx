import { useState } from "react";

function AddTaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }

    addTask({
      id: Date.now(),
      title,
      priority,
      completed: false,
    });

    setTitle("");
    setPriority("Medium");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow mb-6">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 w-full my-2"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;