import './Navbar.css'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-logo">
                <Link to="/">
                    <h1>Fortnitezin</h1>
                </Link>
            </div>
            <div className="nav-bar-menu">
                <NavLink to="/" className="nav-bar-menu-item">News</NavLink>
                <NavLink to="/favorites" className="nav-bar-menu-item">Favorites</NavLink>
                <NavLink to="/about" className="nav-bar-menu-item">About</NavLink>
            </div>
        </div>
    )
}

export default Navbar