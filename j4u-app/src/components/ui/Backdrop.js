import './Backdrop.css'
function Backdrop(props) {
  return <div className="backdrop" onClick={props.onDrop} ></div>;
}

export default Backdrop;
