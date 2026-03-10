function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div
      className={`flex justify-between items-center p-4 rounded shadow ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div>
        <h3
          className={`font-semibold ${
            task.completed ? "line-through" : ""
          }`}
        >
          {task.title}
        </h3>
        <p className="text-sm text-gray-500">
          Priority: {task.priority}
        </p>
      </div>

      <div className="space-x-2">
        <button
          onClick={() => toggleTask(task.id)}
          className="bg-yellow-400 px-3 py-1 rounded"
        >
          Toggle
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;6