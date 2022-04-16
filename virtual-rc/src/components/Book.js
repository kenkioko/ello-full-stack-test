import { Link } from "react-router-dom";
import '../styles/Book.scss';

function Book(props) {
    if (!props.book) {
        return null;
    }

    return (
        <div className="book">
            <p>Total Pages:</p>
            <p>{ props.book.pages.length }</p>

            <Link to="/pages">
                <button className="button">Open Book</button>
            </Link>
        </div>
    );

}

export default Book;