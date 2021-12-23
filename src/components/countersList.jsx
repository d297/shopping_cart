import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 1, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    console.log("ID = ", id);
    const newCounters = counters.filter((c) => {
      return id !== c.id;
    });
    setCounters(newCounters);
  };

  const handelReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    let newValues = counters.map((counter) => {
      if (counter.id === id) {
        counter.value++;
      }
      return counter;
    });
    setCounters(newValues);
  };
  const handleDecrement = (id) => {
    let newValues = counters.map((counter) => {
      if (counter.id === id) {
        counter.value--;
      }
      return counter;
    });
    setCounters(newValues);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handelReset}>
        Reset
      </button>
    </>
  );
};

export default CountersList;
