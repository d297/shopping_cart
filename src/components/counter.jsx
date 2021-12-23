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

  return (
    <>
      <div>
        <span>{props.name}</span>
        <span className={getBageClasses()}>{formatValue()}</span>
        <button
          className="btn btn-primary m-2"
          onClick={() => props.onIncrement(props.id)}
        >
          +
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => props.onDecrement(props.id)}
        >
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
