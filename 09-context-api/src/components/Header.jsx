import { NavLink } from "react-router-dom";

const Header = () => (
    <nav className="nav">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/products">Produtos</NavLink>
        <NavLink className="nav-link" to="/about">Sobre</NavLink>
    </nav>
)

export default Header