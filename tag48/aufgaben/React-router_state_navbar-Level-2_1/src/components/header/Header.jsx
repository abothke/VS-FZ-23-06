import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {

    const [clicked, setClicked] = useState("");
    const buttonClick = (button) => {
        if(clicked !== ""){
            document.querySelector(`#${clicked}`).style = "background-color: ";
        }
        setClicked(button)
        document.querySelector(`#${button}`).style = "background-color: blue";
    }

    return ( 
        <>
        <h1>Header</h1>
        <nav>
    <button id="homenav" onClick={() => buttonClick("homenav")}>
        <Link to='/'>Speisekarte</Link>
    </button>
    <button id="galnav" onClick={() => buttonClick("galnav")}>
        <Link to='/galerie'>Galerie</Link>
    </button>
    <button id="connav" onClick={() => buttonClick("connav")}>
        <Link to='/kontakt'>Kontakt</Link>
    </button>
    <button id="hrsnav" onClick={() => buttonClick("hrsnav")}>
        <Link to='/oeffnungszeiten'>Öffnungszeiten</Link>
    </button>
</nav>
        </>
     );
}
 
<button id="button1" onClick={() => buttonClick('button1')}>Button 1</button>
export default Header;