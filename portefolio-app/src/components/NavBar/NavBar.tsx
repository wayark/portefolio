import { BrowserRouter, NavLink } from "react-router-dom";
import './NavBar.css';
import logo from '../../img/66627127.png';

function NavBar() {
    return (
        <nav>
            <NavLink to="/portefolio/">
                <div className="nav-card">
                    <div className="wrap">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div>
                        Liam LUCAS
                    </div>
                </div>
            </NavLink>
            <div className="nav-select">
                <div>
                    <NavLink to="/portefolio/">BUT</NavLink>
                </div>
                <div>
                    <NavLink to="/portefolio/internship">Alternance</NavLink>
                </div>
            </div>
            
        </nav>
    );
}
export default NavBar;