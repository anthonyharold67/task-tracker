import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [datetime, setDatetime] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    
    addTask({ text, day, isDone: false });
    setText("");
    setDatetime("");
    setTime("");

    
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          placeholder="AddTask"
          required
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day</label>
        <input
          id="day"
          name="day"
          type="date"
          required
          onChange={(e) => setDatetime(e.target.value)}
          value={datetime}
        />
        <label htmlFor="times">Time</label>
        <input
          id="times"
          name="times"
          type="time"
          required
          onChange={(e) => setTime(e.target.value)}
          value={time}
        />

      </div>
      <input type="submit" value="Save Task" onClick={()=>setDay(`${datetime} ${time}`)} className="btn btn-block" />
    </form>
  );
};

export default AddTask;
