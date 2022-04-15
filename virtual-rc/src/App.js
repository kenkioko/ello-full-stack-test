import React, { Component } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import IndexPage from './routes/IndexPage';
import ViewPage from './routes/ViewPage';
import './styles/App.css';

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
                book {
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
            .then((json) => {

                // Code for handling the json data
                var book = (json.data.book) ?? null;
                
                // Set 'book' state variable
                this.setState({
                    book: book
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
        // var props = {
        //     alert: this.state.alert, 
        //     book: this.state.book,
        // }

        // const index = React.createElement('IndexPage', props);

        
        const index = <IndexPage alert={ this.state.alert } book={ this.state.book } />;
        const view = <ViewPage alert={ this.state.alert } book={ this.state.book } />;

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ index } />
                    <Route path="/pages" element={ view } />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
