import "../index.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Home(){
    const books = useSelector((store)=>store.bookList.books);
    const categoryBooks = books.filter(book=>book.id%5===1);
    const popularBooks = books.filter(book=>(book.rating>4.5));
    return(
        <div id="home">
            <h1>Welcome To Maytr's Online Library</h1>
            <h2>Choose Your Favorite Category</h2>
            <div id="homeCategory">
                {categoryBooks.map(book=>{
                return (
                    <Link to={`category/${book.category}`} key={book.id}>
                        <div>
                            <h3>{book.category}</h3>
                        </div>
                    </Link>
                )
            })}
            </div>
            <h2>Popular Books</h2>
            <div id="homeBooks">
                {popularBooks.map(book=>{
                return(
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        <h3>{book.description}</h3>
                        <Link  to={`/book/${book.id}`} key={book.id}>View Details</Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}


export default Home;