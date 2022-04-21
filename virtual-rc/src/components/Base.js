import React from 'react';
import Modal from "./Modal";
import {
    AppHeader,
    AppFooter
} from '../components/Utility';

function Alert(props) {
    if (!props.alert) {
        return null;
    }

    const message = (
        <p>{ props.alert.message }</p>
    );

    return (
        <Modal header={ props.alert.header } body={ message } />
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