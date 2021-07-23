import "./Project.css";

function Project(props) {
  return (
    <div class="project">
      <h2>{props.title}</h2>
      <img src={props.src} alt={props.alt} />
      <p>
        Github Repo:{" "}
        <a rel="noopener noreferrer" href={props.github} target="_blank">
          {props.github}
        </a>
      </p>
      {props.deployed ? (
        <p>
          Deployed Site:{" "}
          <a rel="noopener noreferrer" href={props.deployed} target="_blank">
            {props.deployed}
          </a>
        </p>
      ) : (
        <p>
          Demo Video:{" "}
          <a rel="noopener noreferrer" href={props.demo} target="_blank">
            {props.demo}
          </a>
        </p>
      )}
    </div>
  );
}

export default Project;
