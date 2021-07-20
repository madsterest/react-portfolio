import "./Navigation.css";

function Navigation(props) {
  return <a href={props.href}>{props.title}</a>;
}

export default Navigation;
