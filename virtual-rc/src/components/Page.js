import { Link } from "react-router-dom";
import '../styles/Alert.css';

function Page(props) {
    if (!props.content) {
        return null;
    }

    return (
        <div className="page">
            <Link to="/">Home</Link>
            { props.content }
        </div>
    );

}

export default Page;