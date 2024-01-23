import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
        <div>Nav</div>
        <nav></nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/useeffectcomponent">UseEffectComponent</Link>
        </>
     );
}
 
export default Nav;