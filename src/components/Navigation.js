import "./Navigation.css";

function Navigation(props) {
  if (props.currentPage === props.title) {
    return (
      <li id="active" onClick={props.onClick}>
        {props.title}
      </li>
    );
  } else {
    return (
      <li id="not-active" onClick={props.onClick}>
        {props.title}
      </li>
    );
  }
}

export default Navigation;
