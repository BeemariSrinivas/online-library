import { useState } from "react";
import "../index.css"
import { useDispatch } from "react-redux";
import { addBook } from "../../utils/bookListSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AddBook(){
    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [summary, setSummary] = useState("");
    const [rating, setRating] = useState(null);
    const dispatch = useDispatch();
    const books = useSelector((store)=>store.bookList.books);
    const navigate = useNavigate();

    function handleTitle(event){
        const {value} = event.target;
        setTitle(value);
    }

    function handleDescription(event){
        const {value} = event.target;
        setDescription(value);
    }

    function handleAuthor(event){
        const {value} = event.target;
        setAuthor(value);
    }

    function handleCategory(event){
        const {value} = event.target;
        setCategory(value);
    }

    function handleSummary(event){
        const {value} = event.target;
        setSummary(value);
    }

    function handleRating(event){
        const {value} = event.target;
        setRating(value);
    }

    function handelClick(event){
        event.preventDefault();
        if(title===""){
            alert("Title Can't Be Empty");
            return;
        }
        if(description===""){
            alert("Description Can't Be Empty");
            return;
        }
        if(author===""){
            alert("Author Can't Be Empty");
            return;
        }
        if(category==="")
        {
            alert("Choose a Category");
            return;
        }
        if(summary==="")
        {
            alert("Summary Can't Be Empty");
            return;
        }
        if(rating<0 || rating>5 || rating===null ||rating===""){
            alert("Rating must be in between 0 and 5");
            return;
        }
        else{
            const newBook={  
        "id": books.length+1,
        "title": title,
        "author": author,
        "description": description,
        "category": category,
        "rating": rating,
        "summary": summary,
            }
            dispatch(addBook(newBook));
            navigate("/BrowseBooks");
        }
    }

    return(
        <div id="addBook">
            <h1>AddBook</h1>
            <form id="form">
                <div>
                    <label htmlFor="">Title: </label>
                    <input onChange={handleTitle} id="title" type="text" />
                </div>
                <div>
                    <label htmlFor="">Description: </label>
                    <textarea onChange={handleDescription} id="Desciption" rows="3" cols="30"></textarea>
                </div>
                <div>
                    <label htmlFor="">Author: </label>
                    <input onChange={handleAuthor} id="author" type="text" />
                </div>
                <div>
                    <label htmlFor="">Category: </label>
                    <select onChange={handleCategory} id="Category">
                        <option value="">---Select Category---</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="History">History</option>
                        <option value="Science Ficton">Science Ficton</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Biography">Biography</option>
                        <option value="Anime">Anime</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Summary: </label>
                    <textarea onChange={handleSummary} id="Summary" rows="6" cols="60"></textarea>
                </div>
                <div>
                    <label htmlFor="">Rating(Value must be betwwen 0 and 5): </label>
                    <input onChange={handleRating} id="rating" type="number"/>
                </div>
            </form>
            <button onClick={handelClick}>Submit</button>
        </div>
    )
}


export default AddBook;