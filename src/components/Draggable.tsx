import Drag from './Drag'
// import DragWithMouse from './DragWithMouse';

const Draggable = (props: any) => {
  return (
    <>
      { props["children"].length &&
        props["children"].map((child: JSX.Element, idx:number) => <Drag key={`Drag_${idx}`} child={child} />)
        // props["children"].map((child: JSX.Element, idx:number) => <DragWithMouse key={`Drag_${idx}`} child={child} />)
      }
    </>
  );
}

export default Draggable;