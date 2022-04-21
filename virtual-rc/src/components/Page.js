import React from 'react';
import { Link } from "react-router-dom";
import Content from '../components/Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Construct the page content
// Page content inside a page margin
const displayPage = (pages) => {
    if (!pages) {
        return null;
    }
    
    // display the content
    const page_content = pages.map((page) =>
        <Content key={ page.pageIndex } page={ page } />
    );

    // return page_content;
    return (
        <div className="page">
            {/* Page contents */}
            { page_content }
        </div>
    );
}

// Single Page View
function PageSingle(props) {
    var content = displayPage(props.page_text);

    return (
        <div className="page-single">
            {/* Page contents */}
            { content }
        </div>
    )
}

// Double Page View
function PageDouble(props) {
    // const middleIndex = Math.ceil(props.page_text.length / 2);

    // first (left) page
    const first = props.page_text.slice(0, props.page_lines);
    var content_l = displayPage(first);

    // second (right) page
    const second = props.page_text.slice(props.page_lines, props.page_text.length);
    var content_r = displayPage(second);

    return (
        <div className="page-double">
            {/* Page contents */}
            { content_l }
            { content_r }
        </div>
    )
}

// page display
function Page(props) {
    if (!props.page_text) {
        return null;
    }

    // page view (single or double)
    var page_props = {
        page_text: props.page_text,
        page_lines: props.page_lines,
    };

    const page_view = (props.page_view === 1)
        ? React.createElement(PageSingle, page_props)
        : React.createElement(PageDouble, page_props);

    // display page contents
    return page_view;
}

function Pagination(props) {
    return (
        <div className="page-nav-pagination">
            {/* Previous page*/}
            <button 
                className="page-nav-prev" 
                data-pagination="prev"
                onClick={ props.pagination }
                disabled={ (props.current_page <= 1) && 'disabled' }
            >
                <FontAwesomeIcon icon={ solid('chevron-left') } size="3x" border />
            </button>

            <p className="current-page">
                { props.current_page } of { props.total_pages }
            </p>

            {/* Next page */}
            <button 
                className="page-nav-next" 
                data-pagination="next"
                onClick={ props.pagination }
                disabled={ (props.current_page >= props.total_pages) && 'disabled' }
            >
                <FontAwesomeIcon icon={ solid('chevron-right') } size="3x" border />
            </button>
        </div>
    );
}

// Page navigation buttons
function PageNav(props) {
    return (
        <div className="page-nav">
            {/* Home button */}
            <div className="page-nav-link">
                <Link to="/">
                    <button className="button">
                        Home
                    </button>
                </Link>
            </div>

            <Pagination 
                current_page={ props.current_page } 
                total_pages={ props.total_pages }
                pagination={ props.pagination }
            />

            <div className="page-nav-form">
                {/* Page columns */}
                <div className="custom-select">
                    <label htmlFor="page-view">
                        <FontAwesomeIcon icon={ solid('table-columns') } size="3x" border />
                    </label>
                    
                    <select 
                        id="page-view-select"
                        name="page-view"  
                        onChange={ props.view_change } 
                        defaultValue={ props.page_view }
                    >
                        <option value="1">Single</option>
                        <option value="2">Double</option>
                    </select>
                </div>

                {/* Total page lines */}
                <div className="custom-select">
                    <label htmlFor="page-lines">
                        <FontAwesomeIcon icon={ solid('grip-lines') } size="3x" border />
                    </label>

                    <select 
                        id="page-lines-select"
                        name="page-lines" 
                        onChange={ props.lines_change } 
                        defaultValue={ props.page_lines }
                    >
                        <option value="10">10 Lines</option>
                        <option value="20">20 Lines</option>
                        <option value="30">30 Lines</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Page;
export {
    PageNav
}