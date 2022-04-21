import React, { Component } from 'react';
// import Alert from '../components/Modal';
import BaseApp from "../components/Base";
import Book from '../components/Book';
import '../styles/Book.scss';

class IndexPage extends Component {
    render() {
        const body = (
            <div className="book-container">
                {/* Show Book Component */}
                <Book book={ this.props.book } />
            </div>
        );

        return (
            <BaseApp alert={ this.props.alert } body={ body } />
        )
    }
}

export default IndexPage;
