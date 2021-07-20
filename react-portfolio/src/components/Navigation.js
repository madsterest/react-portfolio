import "./Navigation.css";

function Navigation(props) {
  return <a onClick={props.onClick}>{props.title}</a>;
}

export default Navigation;
