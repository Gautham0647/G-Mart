import "./style.css";

const Spinner = ({className}) => (
  <div className={`loader ${className ? className : ""}`}></div>
);

export default Spinner;
