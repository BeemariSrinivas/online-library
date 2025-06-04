import { Link } from "react-router-dom";
import "../index.css"
import { useState } from "react";
import books from "../../utils/expanded_dummy_books";
import { useParams } from "react-router-dom";

function BrowseBooks(){
    const [name,setName] = useState("");
    const [bookName, setBookName] = useState("");
    const params = useParams();
    let bookList;
    console.log(params);
    if(params.category){
        console.log(params.category);
    }

    function handelChange(event){
        const {value} = event.target;
        setName(value);
    }

    function handelClick(){
        setBookName(name);
    }

    if(params.category)
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