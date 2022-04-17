import { Link } from "react-router-dom";
import Content from '../components/Content';

// Page navigation buttons
function PageNav() {
    return (
        <div className="page-nav">
            <Link to="/">
                <button className="button">
                    Home
                </button>
            </Link>
        </div>
    )
}

function Page(props) {
    if (!props.book) {
        return null;
    }

    // Construct the page content
    // Page content inside a page margin
    const displayPage = () => {
        if (!props.book.pages) {
            return null;
        }
        
        // display the content
        const page_content = props.book.pages.map((page) =>
            <Content key={ page.pageIndex } page={ page } />
        );
    
        return page_content;
    }

    return (
        <div className="page">
            {/* Page contents */}
            { displayPage() }
        </div>
    );

}

export default Page;
export {
    PageNav
}