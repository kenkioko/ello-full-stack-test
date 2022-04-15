import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: {
                value: null,
                position: []
            }
        };
    }

    render() {
        return (
            <div>
                ...
            </div>
        );
    }
}

export default Content;