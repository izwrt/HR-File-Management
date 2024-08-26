import React from "react";
import ReactDom from "react-dom";

const HelloWorld = () => {
  return <h1>Hello World.</h1>;
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HelloWorld />);
