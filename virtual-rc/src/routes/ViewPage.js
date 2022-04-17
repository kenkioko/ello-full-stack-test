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

    render() {
        return (
            <div className="app">
                <AppHeader />
                <PageNav />

                <div className="app-body">
                    {/* Show Error Message */}
                    <Alert alert={ this.props.alert } />

                    {/* Show Book Component */}
                    <Page book={ this.props.book } />
                </div>

                <AppFooter />
            </div>
        );
    }
}

export default ViewPage;