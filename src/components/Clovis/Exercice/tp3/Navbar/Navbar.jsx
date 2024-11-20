import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav>
            <Link to="/">Acceuil</Link> | <Link to="/users">Users</Link> | <Link to="/posts">Posts</Link>
        </nav>
    )
}