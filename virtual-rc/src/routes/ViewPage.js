import React, { Component } from 'react';
import Alert from '../components/Alert';
import Page, { PageNav } from '../components/Page';
import {
    AppHeader,
    AppFooter
} from '../components/Utility';
import '../styles/Page.scss';

class ViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page_view: 1,
            page_lines: 20,
            current_page: !(props.book) ? 0 : 1,
        };
    }

    pageTextIndex = () => {
        if (!this.props.book) {
            return [];
        }

        // Loop page index to show
        const page_text = this.props.book.pages.filter((page) => {
            // Get first and last index
            var total_lines = this.state.page_lines * this.state.page_view;
            var last_index = this.state.current_page * total_lines;
            var first_index = last_index - total_lines;

            return page.pageIndex < last_index && page.pageIndex >= first_index;
        });

        return page_text;
    }

    handleNextPage = (event) => {
        var current_page = this.state.current_page + this.state.page_view;
        this.setState({
            current_page: current_page
        });
    }

    handlePrevPage = () => {
        var current_page = this.state.current_page - this.state.page_view;
        this.setState({
            current_page: current_page
        });
    }

    // change page view event
    handleViewChange = (event) => {
        const page_view = parseInt(event.target.value);
        if (page_view !== this.state.page_view) {
            this.setState({
                page_view: page_view
            });
        }
    }

    // change page max lines event
    handleLinesChange = (event) => {
        const page_lines = parseInt(event.target.value);
        if (page_lines !== this.state.page_lines) {
            this.setState({
                page_lines: page_lines
            });
        }
    }

    render() {
        // Page navigation element
        const page_nav = React.createElement(PageNav, {
            page_view: this.state.page_view,
            page_lines: this.state.page_lines,
            view_change: this.handleViewChange,
            lines_change: this.handleLinesChange,
        });

        // Page view element
        const page_view = React.createElement(Page, {
            page_text: this.pageTextIndex(),
            page_view: this.state.page_view,
            page_lines: this.state.page_lines,
        });

        return (
            <div className="app">
                <AppHeader />

                {/* Page Naviation */}
                { page_nav }

                <div className="app-body">
                    {/* Show Error Message */}
                    <Alert alert={ this.props.alert } />

                    {/* Show Page Component */}
                    { page_view }
                </div>

                <AppFooter />
            </div>
        );
    }
}

export default ViewPage;