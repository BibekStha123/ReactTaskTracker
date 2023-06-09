import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      date: "12/02/2023",
      reminder: true,
    },
    {
      id: 2,
      text: "Assignment Submision",
      date: "23/03/2023",
      reminder: false,
    },
    {
      id: 3,
      text: "License Exam",
      date: "02/03/2023",
      reminder: false,
    },
  ]);

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const reminderTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //add task
  const addTask = (task) => {
    setTasks([...tasks, task]);
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
