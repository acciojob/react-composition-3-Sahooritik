
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{ padding: "50px" }}>
      

      <Tooltip text="This is a tooltip ">
        <h3>Hover over me</h3>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is an another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>

      
    </div>
  );
}

export default App
