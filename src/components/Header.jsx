import { Link } from "react-router-dom";
import "../index.css"

function Header(){
    return(
        <>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/BrowseBooks">BrowseBooks</Link>
            <Link to="AddBook">AddBook</Link>
        </ul>
        </>
    )
}


export default Header;