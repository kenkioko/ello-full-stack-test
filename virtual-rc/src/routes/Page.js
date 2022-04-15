import React, { Component } from 'react';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: null,
            content: null,
            tokens: [],
        };
    }

    render() {
        return (
            <div>
                Pages ...
            </div>
        );
    }
}

export default Page;