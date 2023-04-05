import Task from "./Task";

const Tasks = ({ tasks, onDelete, reminderFunction }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          reminderFunction={reminderFunction}
        />
      ))}
    </>
  );
};

export default Tasks;
