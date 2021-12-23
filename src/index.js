import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import CountersList from "./components/countersList";

const App = () => {
  return <CountersList />;
};

reactDom.render(<App />, document.getElementById("root"));
