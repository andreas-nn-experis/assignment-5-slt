import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext";

const Navbar = () => {

    const {user} = useUser()

    return (
        <nav class="navbar">
            {user !== null &&
            <ul id="navigation">
                <li id="nav-translation"><NavLink to="/translation">Translations</NavLink></li>
                <li id="nav-profile"><NavLink to="/profile">Profile</NavLink></li>
            </ul>
            }
        </nav>
    );
}
export default Navbar