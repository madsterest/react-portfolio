import "./Navigation.css";

function Navigation(props) {
  if (props.currentPage === props.title) {
    return (
      <a className="active" onClick={props.onClick}>
        {props.title}
      </a>
    );
  } else {
    return (
      <a className="not-active" onClick={props.onClick}>
        {props.title}
      </a>
    );
  }
}

export default Navigation;
