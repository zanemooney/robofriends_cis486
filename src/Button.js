import React from "react";

const Button = () => {
  return (
      <div className="e-card-actions">
        <button className="voteUp e-card-btn">
          <img src='./assets/up.png' title="Up" alt="up"/>
        </button>
        <button className="voteDown e-card-btn">
          <img src='./assets/down.png' title="Down" alt="down"/>
        </button>
      </div>
  );
}

export default Button;