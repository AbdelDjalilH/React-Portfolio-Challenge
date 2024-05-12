import { Link } from "react-router-dom";
import '../styles/Navbar.scss'
function Navbar () {

    return(
        <div className="Nav-container">
            <Link className="Link-nav" to = "/">Accueil</Link>
            <Link className="Link-nav" to = "/ProjectPage">Projet</Link>
            <Link className="Link-nav" to = "/ProjectsPages">Mes projects</Link>
            <Link className="Link-nav" to = "/ContactPages">Me contacter</Link>
        </div>
    )
}

export default Navbar;