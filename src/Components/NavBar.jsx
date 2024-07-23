import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {

    return (
        <nav>
            <Link to="/">
                <button>Login</button>
            </Link>
            <Link to="/home">
                <button>Home</button>
            </Link>
            <Link to="/songs">
                <button>Library</button>
            </Link>
            <Link to="/songs/add">
                <button>Add</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
        </nav>
    )
}