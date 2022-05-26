import { useState } from "react";

const Drag = ({ child }: { child: JSX.Element }) => {
  const x = useState(10);
  const y = useState(100);
  const gap = useState([0, 0]);

  const setCoords = (event: any) => {
    if (event.clientX < 0) {
      x[1](0);
    } else if (event.clientX > window.innerWidth - 120) {
      x[1](window.innerWidth - 120);
    } else {
      x[1](event.clientX - gap[0][0]);
    }
    if (event.clientY < 0) {
      y[1](0);
    } else if (event.clientY > window.innerHeight - 120) {
      y[1](window.innerHeight - 120);
    } else {
      y[1](event.clientY - gap[0][1]);
    }
  }
  const handleDrag = (event: any) => {
    console.log('Drag');
    if (!event.clientX && !event.clientY) {
      return ;
    }
    setCoords(event);
  }
  const handleDragEnd = (event: any) => {
    console.log('DragEnd');
  }
  const handleDragStart = (event: any) => {
    console.log('DragStart')
    const img = new Image();
    event.dataTransfer.setDragImage(img, 0, 0);
    gap[1]([event.clientX - x[0], event.clientY - y[0]]);
  }
  return (
    <div draggable onDrag={handleDrag} onDragEnd={handleDragEnd} onDragStart={handleDragStart} style={{ position: "absolute", left: `${x[0]}px`, top: `${y[0]}px` }}>
      {child}
    </div>
  );
};

export default Drag;