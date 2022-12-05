import React from "react";
import "./style.css";

const TitleBoard = ({children}) => {
  return (
    <section className="board__title">
      {children}
    </section>
  )
}

export default TitleBoard;