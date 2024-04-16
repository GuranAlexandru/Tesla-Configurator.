import "./Footer.css";

const Footer = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link disabled" aria-disabled="true">
          SDA Academy - Final Project // Alexandru Guran
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/alexguran/">
          MyLinkedIn
        </a>
      </li>
    </ul>
  );
};

export default Footer;
