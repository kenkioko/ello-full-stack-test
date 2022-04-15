import React, { Component } from 'react';
import Alert from '../components/Alert';
import Book from '../components/Book';
import '../styles/App.css';

class Index extends Component {
    
    render() {
        return (
            <div className="App">
                {/* Show Error Message */}
                <Alert alert={ this.props.alert } />

                {/* Show Book Component */}
                <Book book={ this.props.book }/>
            </div>
        );
    }
}

export default Index;
