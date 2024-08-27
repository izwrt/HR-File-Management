import React from "react";
import ReactDom from "react-dom";
<<<<<<< HEAD

const HelloWorld = () => {
  return <h1>Hello World.</h1>;
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HelloWorld />);
=======
import Login from "./components/auth/Login";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Login/>);
>>>>>>> origin/master
