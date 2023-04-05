import Button from "./Button";

const Header = (props) => {
  return (
    <header className="header">
      <h2>{props.title}</h2>
      <Button
        color={props.taskForm ? "red" : "green"}
        text={props.taskForm ? "Hide" : "Add"}
        click={props.showTask}
      />
    </header>
  );
};

export default Header;
