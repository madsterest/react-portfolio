import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a
            rel="noopener noreferrer"
            href="https://github.com/madsterest"
            target="_blank"
          >
            <i className="fab fa-github-square fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/madeleine-o-dea-8260a5204/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            href="https://www.facebook.com/madeleine.odea.1/"
            target="_blank"
          >
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
