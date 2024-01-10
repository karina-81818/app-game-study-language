import { NavLink } from "react-router-dom"
import styles from './Header.module.scss'

function Header() {
    return (
        <nav className={styles.container}>
            <NavLink className={styles.nav} to='/'>Home</NavLink>
            <NavLink className={styles.nav} to='/game'>Game</NavLink>
            <NavLink className={styles.nav} to='/table'>Table</NavLink>
        </nav>
    );
}

export default Header;