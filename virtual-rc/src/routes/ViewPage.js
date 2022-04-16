import React, { Component } from 'react';
import Alert from '../components/Alert';
import Page from '../components/Page';
import Content from '../components/Content';

class ViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left_page: null,
            right_page: null,
        }
    }

    HandleNextPage() {
        // ...
    }

    HandlePrevPage() {
        // ...
    }

    // Construct the page content
    // Page content inside a page margin
    displayPage = () => {
        if (!this.props.book) {
            return null;
        }

        // display the content
        const page_content = this.props.book.pages.map((page) =>
            <Content key={ page.pageIndex } page={ page } />
        );

        return page_content;
    }
    
    render() {
        return (
            <div className="Index">
                {/* Show Error Message */}
                <Alert alert={ this.props.alert } />

                {/* Show Book Pages Content */}
                <Page content={ this.displayPage() } />
            </div>
        );
    }
}

export default ViewPage;