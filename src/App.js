import React from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import List from "./components/list";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="countainer">
        <Counters />
        <List />
      </main>
    </React.Fragment>
  );
}

export default App;
