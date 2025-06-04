import "../index.css"
import books from "../../utils/expanded_dummy_books";
import { Link } from "react-router-dom";


function Home(){
    const categoryBooks = books.filter(book=>book.id%5===1);
    const popularBooks = books.filter(book=>(book.rating>4.5));
    return(
        <div id="home">
            <h1>Home Page</h1>
            <div id="homeCategory">
                {categoryBooks.map(book=>{
                return (
                    <Link to={`category/${book.category}`} key={book.id}>
                        <div>
                            <h2>{book.category}</h2>
                        </div>
                    </Link>
                )
            })}
            </div>
            <div id="homeBooks">
                {popularBooks.map(book=>{
                return(
                    <div key={book.id}>
                        <h2>{book.title}</h2>
                        <h2>{book.description}</h2>
                        <Link  to={`/book/${book.id}`} key={book.id}>View Details</Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}


export default Home;