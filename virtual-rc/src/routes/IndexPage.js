import React, { Component } from 'react';
import Alert from '../components/Alert';
import Book from '../components/Book';

class IndexPage extends Component {
    
    render() {
        return (
            <div className="Index">
                {/* Show Error Message */}
                <Alert alert={ this.props.alert } />

                {/* Show Book Component */}
                <Book book={ this.props.book } />
            </div>
        );
    }
}

export default IndexPage;
