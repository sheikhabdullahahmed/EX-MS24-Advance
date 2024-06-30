import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar" style={{marginBottom: '5rem'}}>
            <div className="navbar-brand">BrandName</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>

            </ul>
        </nav>
  );
}

export default Header;