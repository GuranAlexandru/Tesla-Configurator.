import "./Navbar.css";
import tesla_logo from "../../Assets/tesla-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <img src={tesla_logo} />
      </div>
    </nav>
  );
};

export default Navbar;
