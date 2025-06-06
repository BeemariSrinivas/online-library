import { Link } from "react-router-dom";
import "../index.css"
import { useState } from "react";
import books from "../../utils/expanded_dummy_books";
import { useParams } from "react-router-dom";

function BrowseBooks(){
    const [name,setName] = useState("");
    const [bookName, setBookName] = useState("");
    const [newbookList , setBookList] = useState([]);
    const [filter, setFilter] = useState(false);
    const params = useParams();
    const categoryBooks = books.filter((book)=>book.id%5==1);
    let bookList;

    function handelChange(event){
        const {value} = event.target;
        setName(value);
    }

    function handelClick(){
        setBookName(name);
    }

    if(!filter && params.category)
    {
        const newBook = books.filter((book)=>book.category===params.category);
        bookList = newBook;
    }
    else{
        bookList = books;
    }
    if(bookName){
        const newBook = books.filter((book)=>book.title===bookName)
        bookList = newBook;
    }

    return(
        <div id="browseBooks">
            <h1>BrosweBooks</h1>
            <h2>Filer Books</h2>
            <div id="categoryBooks">
                {
                categoryBooks.map((book)=>{
                    return(
                        <Link to={`/category/${book.category}`} key={book.id}>
                            <div >
                            <h3>{book.category}</h3>
                        </div>
                        </Link>
                    )
                })
            }
            </div>
            <Link to="/BrowseBooks">
                <button onClick={()=>{
                setBookName("");
                setName("");
            }}>Clear Filter
            </button></Link>
            <h2>--------------------Or-----------------------</h2>
            <h2>Search Book By Book Title</h2>
            <div id="search">
                <label>Enter Book Name: </label>
                <input id="bookName" onChange={handelChange} value={name} type="text"/>
                <button onClick={handelClick}>Search</button>
            </div>
            <div id="books">
                {bookList.map((book)=>{
                return(
                    <div key={book.id}>
                        <h2>{book.title}</h2>
                        <h2>{book.description}</h2>
                        <Link  to={`/book/${book.id}`} key={book.id}>View Details</Link>
                    </div>    
                )
            }
            )}
            </div>
        </div>
    )
}


export default BrowseBooks;