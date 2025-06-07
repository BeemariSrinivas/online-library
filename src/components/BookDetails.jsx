import { Link, useParams } from "react-router-dom";
import "../index.css";
import { useSelector } from "react-redux";

function BookDetails(){
    const id = useParams().id;
    const books = useSelector((store)=>store.bookList.books);
    const booKDetails = books.filter((book)=>book.id==id);
    
    const book = booKDetails[0];
    return(
        <div id="bookDetails">
        <h1>Book Details</h1>
            <div key={book.id} id="bookDetails">
                <h2>{book.title}</h2>
                <h2>{book.description}</h2>
                <h2>{`By ${book.author}`}</h2>
                <h2>{`Category: ${book.category}`}</h2>
                <h2>{`Summary: ${book.summary}`}</h2>
                <h2>{`Rating: ${book.rating}`}</h2>
            </div>
        <Link to="/BrowseBooks"><button>Back to Browse Books</button></Link>
        </div>
    )
}


export default BookDetails;