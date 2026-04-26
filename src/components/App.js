
import React from "react";

import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      
      <h2 className="tooltip">
      <Tooltip text="This is a tooltip">
        Hover over me
      </Tooltip>
    </h2>
 <hr/>
 
       <p className="tooltip">
      <Tooltip text="This is an another tooltip">
        Hover over me to see another tooltip
      </Tooltip>
    </p>

    </div>
  );
}

export default App
