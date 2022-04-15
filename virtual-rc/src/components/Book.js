import { Link } from "react-router-dom";
import '../styles/Alert.css';

function Book(props) {
    if (!props.book) {
        return null;
    }

    return (
        <div className="book">
            <p>Total Pages:</p>
            <p>{ props.book.pages.length }</p>

            <Link to="/pages">Open Book</Link>
        </div>
    );

}

export default Book;