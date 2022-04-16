import React, { Component } from 'react';
import Alert from '../components/Alert';
import Book from '../components/Book';
import {
    AppHeader,
    AppFooter
} from '../components/Utility';
import '../styles/Book.scss';

class IndexPage extends Component {
    
    render() {
        return (
            <div className="app">
                <AppHeader />

                <div className="body">
                    {/* Show Error Message */}
                    <Alert alert={ this.props.alert } />

                    {/* Show Book Component */}
                    <div className="book-container">
                        <Book book={ this.props.book } />
                    </div>
                </div>

                <AppFooter />
            </div>
        );
    }
}

export default IndexPage;
