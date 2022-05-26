import Drag from './Drag'

const Draggable = (props: any) => {
  return (
    <>
      { props["children"].length &&
        props["children"].map((child: JSX.Element, idx:number) => <Drag child={child} idx={idx}/>)
      }
    </>
  );
}

export default Draggable;