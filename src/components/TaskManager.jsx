import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div>
      <AddTaskForm addTask={addTask} />

      <div className="my-4 text-center">
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed Tasks: {completedCount}</p>
      </div>

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TaskManager;