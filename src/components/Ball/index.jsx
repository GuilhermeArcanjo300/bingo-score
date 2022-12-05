import React, { useState } from "react";
import "./style.css";

const BallBoard = ({children}) => {
  const [ballActive, setBallActive] = useState(false);

  return (
    <section className={`board__ball ${ballActive && 'board__ball--active'}`} onClick={() => setBallActive(true)}>
      <span>{children}</span>
    </section>
  )
}

export default BallBoard;