import { NavLink } from "react-router-dom"
import './Header.scss'

function Header() {
    return (
        <nav className="container-header">
            <NavLink className={'nav-header'} to='/'>Home</NavLink>
            <NavLink className={'nav-header'} to='/game'>Game</NavLink>
            <NavLink className={'nav-header'} to='/table'>Table</NavLink>
        </nav>
    );
}

export default Header;