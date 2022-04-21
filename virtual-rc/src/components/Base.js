import React from 'react';
import Modal from "./Modal";
import {
    AppHeader,
    AppFooter
} from './Utility';

function Alert(props) {
    if (!props.alert) {
        return null;
    }

    const header = (
        <h3>{ props.alert.header }</h3>
    );

    const body = (
        <p>{ props.alert.message }</p>
    );

    return (
        <Modal 
            id="alert-modal" 
            header={ header } 
            body={ body } 
            show={ true }
        />
    );
}

function BaseApp(props) {
    return (
        <div className="app">
                {/* App header */}
                <AppHeader />

                {/* App alert */}
                <Alert alert={ props.alert } />

                {/* App body */}
                <div className="app-body">
                    { props.body }
                </div>

                {/* App footer */}
                <AppFooter />
            </div>
    );
}

export default BaseApp;