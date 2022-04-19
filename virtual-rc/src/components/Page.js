import React from 'react';
import { Link } from "react-router-dom";
import Content from '../components/Content';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

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

// Page navigation buttons
function PageNav(props) {
    return (
        <div className="page-nav">
            <div className="page-nav-link">
                <Link to="/">
                    <button className="button">
                        Home
                    </button>
                </Link>
            </div>

            <div className="page-nav-form">
                <div className="custom-select">
                    <label htmlFor="page-view">
                        {/* <FontAwesomeIcon icon={solid('table-columns')} /> */}
                        {/* Page View: */}
                    </label>
                    
                    <select name="page-view" id="page-view-select" onChange={ props.view_change } defaultValue={ props.page_view }>
                        <option value="1">Single</option>
                        <option value="2">Double</option>
                    </select>
                </div>

                <div className="custom-select">
                    <label htmlFor="page-lines">
                        {/* <FontAwesomeIcon icon={solid('table-columns')} /> */}
                        {/* Max Lines: */}
                    </label>

                    <select name="page-lines" id="page-lines-select" onChange={ props.lines_change } defaultValue={ props.page_lines }>
                        <option value="10">10 Lines</option>
                        <option value="20">20 Lines</option>
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