import React from "react";

export default function Square({ children, black, position }) {
  const bgClass = black ? "square-black" : "square-white";
  console.log(position)

  return (
    <>
    <div className={`${bgClass} board-square pos`}>{children}</div>
    {position && (position[1] == 1 && position[0] == "a" ? (
      <div className="pos-w pos-n">{position[0]}</div>
    ) : position[1] == 1 ? (
      <div className="pos-w">{position[0]}</div>
    ) : position[0] == "a" ? (
      <div className="pos-n">{position[1]}</div>
    ) : (
      <div></div>
    ))}
  </>
  );
}