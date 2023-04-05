const Button = ({ color, text, click }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={click}>
      {`${text}  Task Form`}
    </button>
  );
};

export default Button;
