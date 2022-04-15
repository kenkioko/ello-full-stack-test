import '../styles/Alert.css';

function Alert(props) {
    if (!props.alert) {
        return null;
    }

    return (
        <div className="alert">
            <h3>{ props.alert.header }</h3>
            <p>{ props.alert.message }</p>
            
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                X
            </button>
        </div>
    );
}

export default Alert;