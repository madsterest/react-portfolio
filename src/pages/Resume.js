function Resume(props) {
  return (
    <div className="resume">
      <h3>Resume:</h3>
      <a rel="noopener noreferrer" href={props.resume} target="_blank">
        Resume
      </a>
      <h4>Technical Skills:</h4>
      <ul>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>Handlebars</li>
        <li>MongoDB</li>
        <li>IndexDB</li>
        <li>React</li>
      </ul>
    </div>
  );
}

export default Resume;
