import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav>
            <Link to="/">Acceuil</Link> | <Link to="/about">A propos</Link> | <Link to="/contact">Contact</Link>
        </nav>
    )
}