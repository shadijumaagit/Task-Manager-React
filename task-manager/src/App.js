import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import NavBar from "./components/NavBar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";


function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-10-mx-auto">
            <AddTask />
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
