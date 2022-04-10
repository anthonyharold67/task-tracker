import Duty from "./Duty";

const Tasks = ({ tasks, deleteTask, toggleDone }) => {
  return (
    <div>
      {tasks.map((task,index) => (
        <Duty duty={task} deleteTask={deleteTask} toggleDone={toggleDone} key={index}/>
      ))}
    </div>
  );
};

export default Tasks;
