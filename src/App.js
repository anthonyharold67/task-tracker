import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Cat",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  const toggleDone = (toggleDoneId) => {
    console.log("double click", toggleDoneId);
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
        setTasks={setTasks}
      />

      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <h2 style={{ textAlign: "center" }}>NO TASK TO SHOW</h2>
      )}
      {tasks.length>0 && <button className="btnDel" onClick={()=>setTasks([])}>Delete All Task</button>}
    </div>
  );
}

export default App;
