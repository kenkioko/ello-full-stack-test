import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Modal(props) {
    if (!props.header && !props.body) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{ props.header }</h3>

                    <button type="button" className="button-close">
                        <FontAwesomeIcon icon={ solid('xmark') } border />
                    </button>
                </div>

                <div className="modal-body">
                    <p>{ props.body }</p>
                </div>

                <div className="modal-footer">
                    <button type="button" className="button" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;