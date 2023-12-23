import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>
);

/* const [{ isDragging }, drag, preview] = useDrag({
  type: "piece",
  item: () => ({ id: `${position}_${piece.type}_${piece.color}` }),
  collect: (monitor) => {
    return { isDragging: !!monitor.isDragging() };
  },
}); */