import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();

      setTasks(data);
    };

    fetchTasks();
  }, []);

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // toggle reminder
  const reminderTask = async (id) => {
    const taskToToogle = await fetchTask(id);
    const updatedTask = { ...taskToToogle, reminder: !taskToToogle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  //add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  //toggle showAddTask
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          showTask={toggleAddTask}
          taskForm={showAddTask}
        />
        {showAddTask && <AddTask addTask={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            reminderFunction={reminderTask}
          />
        ) : (
          <p>No tasks</p>
        )}
        <Routes>
          <Route path="/about" component={About} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
