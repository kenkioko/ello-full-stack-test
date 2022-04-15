import React, { Component } from 'react';
import Alert from './Alert';
import Book from './Book';
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: null,
            book: null,
        };
    }

    componentDidMount() {
        this.getBook();
    }

    // Fetch the book object from the endpoint.
    // Set the state depending on the response.
    getBook() {
        // GreaphQL query
        var graphql = {
            query: `{
                 {
                    pages {
                        pageIndex
                        content
                        tokens {
                            value
                            position
                        }
                    }
                }
            }`
        };

        // Fetch API
        fetch('https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(graphql)
            })
            .then((response) => {
            
                // Code for handling the response error
                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }

                // Change into json data
                return response.json();
            })
            .then((data) => {

                // Code for handling the json data
                // Set 'book' state variable
                this.setState({
                    book: data
                });
            })
            .catch((error) => {
            
                // Code for handling the error
                // Set 'error' state variable
                console.log(error);
                this.setState({
                    alert: {
                        header: 'There has been a problem with your fetch operation:',
                        message: error.message
                    }
                });
            });
    }

    render() {
        return (
            <div className="App">
                {/* Show Error Message */}
                <Alert alert={ this.state.alert } />

                {/* Show Book Component */}
                <Book />
            </div>
        );
    }
}

export default App;
