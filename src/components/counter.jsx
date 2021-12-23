import React from "react";

const Counter = (props) => {
  const { value } = props;

  function formatValue() {
    return value === 0 ? "empty" : value;
  }

  function getBageClasses() {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  }

  const handleIncrement = () => {
    //setValue(value + 1);
  };
  const handleDecrement = () => {
    //setValue(value - 1);
  };

  return (
    <>
      <div>
        <span>{props.name}</span>
        <span className={getBageClasses()}>{formatValue()}</span>
        <button className="btn btn-primary m-2" onClick={handleIncrement}>
          +
        </button>
        <button className="btn btn-primary m-2" onClick={handleDecrement}>
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => props.onDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Counter;
