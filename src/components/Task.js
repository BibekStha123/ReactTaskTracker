import { FaTimes } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaBellSlash } from "react-icons/fa";
const Task = ({ task, onDelete, reminderFunction }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>
        {task.date}
        {task.reminder ? (
          <FaBellSlash onClick={() => reminderFunction(task.id)} />
        ) : (
          <FaBell onClick={() => reminderFunction(task.id)} />
        )}
      </p>
    </div>
  );
};

export default Task;
