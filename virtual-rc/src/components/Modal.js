import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function closeModal(modal_id) {
    if (!modal_id) {
        return null;
    }

    const modal = document.getElementById(modal_id);
    modal.classList.add('d-none');
    modal.classList.remove('d-block');
}

function showModal(modal_id) {
    if (!modal_id) {
        return null;
    }

    const modal = document.getElementById(modal_id);
    modal.classList.add('d-block');
    modal.classList.remove('d-none');
}

function Modal(props) {
    if (!props.header && !props.body) {
        return null;
    }

    return (
        <div className="modal" id={ props.id }>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{ props.header }</h3>

                    <button type="button" className="button-close" onClick={ (e) => closeModal(props.id) } >
                        <FontAwesomeIcon icon={ solid('xmark') } border />
                    </button>
                </div>

                <div className="modal-body">
                    { props.body }
                </div>

                <div className="modal-footer">
                    <button type="button" className="button" onClick={ (e) => closeModal(props.id) } >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
export {
    showModal,
    closeModal
}