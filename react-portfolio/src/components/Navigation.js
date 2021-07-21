import "./Navigation.css";

function Navigation(props) {
  if (props.currentPage === props.title) {
    return (
      <li className="active" onClick={props.onClick}>
        {props.title}
      </li>
    );
  } else {
    return (
      <li className="not-active" onClick={props.onClick}>
        {props.title}
      </li>
    );
  }
}

export default Navigation;
