import React, { ReactElement } from 'react';
import Drag from './Drag'
import DragWithMouse from './DragWithMouse';

const Draggable = ({children}: {children: ReactElement | Array<ReactElement> | undefined}) => {
  // console.log(children);
  // console.log(Array.isArray(children));
  return (
    <React.Fragment>
      {
        // Drag
        children === undefined ? <></>
        : !Array.isArray(children) ? <Drag key="Drag" child={children}/>
        : children.map((child: ReactElement, idx: number) => <Drag key={`Drag_${idx}`} child={child} />)
      }
      {
        // DragWithMouse
        children === undefined ? <></>
        : !Array.isArray(children) ? <DragWithMouse key="Drag" child={children}/>
        : children.map((child: ReactElement, idx: number) => <DragWithMouse key={`Drag_${idx}`} child={child} />)
      }
    </React.Fragment>
  );
}

export default Draggable;