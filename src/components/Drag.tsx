import { useState } from "react";

const Drag = ({child, idx}: {child: JSX.Element, idx:number}) => {
  const x = useState(10);
    const y = useState(100);

    const handleDrag = (event: any) => {
      console.log('Drag');
      // console.log(event.clientX, event.clientY);
      // console.log(event.target.offsetLeft, event.target.offsetTop);
      // x[1](event.clientX);
      // y[1](event.clientY);
      if (event.clientX < 0) {
        x[1](0);
      } else if (event.clientX > window.innerWidth - 120) {
        x[1](window.innerWidth - 120);
      } else {
        x[1](event.clientX);
      }
      if (event.clientY < 0) {
        y[1](0);
      } else if (event.clientY > window.innerHeight - 120) {
        y[1](window.innerHeight - 120);
      } else {
        y[1](event.clientY);
      }
    }
    const handleDragEnd = (event: any) => {
      console.log('DragEnd');
      // console.log(event.clientX, event.clientY);
      // console.log(event.target.offsetLeft, event.target.offsetTop);
      // console.log(event.target);

      if (event.clientX < 0) {
        x[1](0);
      } else if (event.clientX > window.innerWidth - 120) {
        x[1](window.innerWidth - 120);
      } else {
        x[1](event.clientX);
      }
      if (event.clientY < 0) {
        y[1](0);
      } else if (event.clientY > window.innerHeight - 120) {
        y[1](window.innerHeight - 120);
      } else {
        y[1](event.clientY);
      }
    }
    const handleDragStart = (event: any) => {
      console.log('DragStart')
      // const img = new Image();
      // event.dataTransfer.setDragImage(img, 0, 0);
      x[1](event.clientX);
      y[1](event.clientY);
    }
    return (
      <div key={`Drag_${idx}`} onDrag={handleDrag} onDragEnd={handleDragEnd} onDragStart={handleDragStart} style={{position:"absolute", left: `${x[0]}px`, top: `${y[0]}px` }}>
        {child}
      </div>
    );
};

export default Drag;