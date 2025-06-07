import { useNavigate } from "react-router-dom";
import "../index.css";

function Error(){
    const navigate = useNavigate();
    function handelClick(){
        navigate("/");
    }
    return(
        <div id="error">
        <h1>OOPS!!! PAGE NOT FOUND</h1>
        <button onClick={handelClick}>Return to Home</button>
        </div>
    )
}


export default Error;