import { BrowserRouter, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <div>
                <NavLink to="/portefolio/">Home</NavLink>
                <NavLink to="/portefolio/but">But</NavLink>
            </div>
        </nav>
    );
}
export default NavBar;