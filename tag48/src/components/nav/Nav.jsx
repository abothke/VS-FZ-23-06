import { Link } from "react-router-dom";
import "./nav.css"
const Nav = () => {
    return ( 
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/userlist">Userlist</Link>
        </nav>
        </>
     );
}
 
export default Nav;