import { Link, useParams } from "react-router-dom";
import "../index.css";
import books from "../../utils/expanded_dummy_books";

function BookDetails(){
    const id = useParams().id;
    const booKDetails = books.filter((book)=>book.id==id);
    const book = booKDetails[0];
    return(
        <>
        <h1>BookDetails{id}</h1>
            <div key={book.id} id="bookDetails">
                <h2>{book.title}</h2>
                <h2>{book.description}</h2>
                <h2>{book.author}</h2>
                <h2>{book.category}</h2>
                <h2>{book.summary}</h2>
                <h2>{book.rating}</h2>
            </div>
        <Link to="/BrowseBooks"><button>Back to BroseBooks</button></Link>
        </>
    )
}


export default BookDetails;