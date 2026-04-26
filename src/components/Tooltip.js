import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}

      {showTooltip && (
        <span
          className="tooltiptext"
          style={{
            position: "absolute",
            bottom: "125%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "tomato",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            whiteSpace: "nowrap",     
            zIndex: 1,
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;