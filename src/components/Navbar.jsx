import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      
    
    </nav>
    
  );
}

export default Navbar;
