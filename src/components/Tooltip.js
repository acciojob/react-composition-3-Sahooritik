import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
<div onMouseEnter={()=>{setShowTooltip(true)}} onMouseLeave={()=>{setShowTooltip(false)}}>

  {showTooltip && <div className="tooltiptext">{text}</div>}

  {children}

 

</div>

  
        
)}

export default Tooltip;