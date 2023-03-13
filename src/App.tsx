import React from "react";
import "./App.css";
import RibbonComponent from "./components/RibbonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
          <RibbonComponent position="top-left" title="INFO" bg="info" />
          <RibbonComponent  title="Pendiente" bg="primary"/>
          <RibbonComponent position="bottom-left" title="WARNING" bg="warning" />
          <RibbonComponent position="bottom-right" title="DANGER" bg="danger" />
        </div>
      </header>
    </div>
  );
}

export default App;
