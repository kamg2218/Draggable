import { useState } from "react";

const DragWithMouse = ({ child }: { child: JSX.Element }) => {
  const x = useState(10);
  const y = useState(100);
  const gap = useState([0, 0]);
  const down = useState(false);

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
  const handleMouseDown = (event: any) => {
    // console.log('MouseDown');
    down[1](!down[0]);
    gap[1]([event.clientX - x[0], event.clientY - y[0]]);
  }
  const handleMouseMove = (event: any) => {
    if (down[0]) {
      // console.log('MouseMove');
      setCoords(event);
    }
  }
  return (
    <div draggable onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseLeave={()=>console.log('MouseLeave')} onMouseOut={()=>console.log('MouseOut')} style={{ position: "absolute", left: `${x[0]}px`, top: `${y[0]}px` }}>
      {child}
    </div>
  );
};

export default DragWithMouse;