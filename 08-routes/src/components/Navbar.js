import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to="/">Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                to="/about">About
            </NavLink>
        </nav>
    )
}

export default Navbar