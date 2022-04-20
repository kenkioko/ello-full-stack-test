import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Toogle between original text
function handleClick(event) {
    const content_el = event.currentTarget.querySelector(".page-text-content");
    const tokenized_el = event.currentTarget.querySelector(".page-text-tokenized");

    // toogle dataset change
    const toogle = event.currentTarget.dataset.toogle;
    if (toogle === 'false') {
        content_el.classList.add("d-none");
        tokenized_el.classList.remove("d-none");

        event.currentTarget.dataset.toogle = true;
    }

    if (toogle === 'true') {
        content_el.classList.remove("d-none");
        tokenized_el.classList.add("d-none");

        event.currentTarget.dataset.toogle = false;
    }
}

// Toogle the show original icon
function handleMouse(event) {
    const toogle = event.currentTarget.dataset.toogle;
    const toogle_el = event.currentTarget.querySelector(".page-text-toogle");

    if (event.type === 'mouseenter') {
        toogle_el.classList.remove('d-none');
    } 
    
    if (event.type === 'mouseleave' && toogle === 'false') {
        toogle_el.classList.add('d-none');
    }
}

function Tokenized(props) {
    return (
        <span>
            { props.content.substring(
                props.token.position[0],
                props.token.position[1]
            ) }
        </span>
    )
}

function Content(props) {
    if (!props.page) {
        return null;
    }

    const tokenized = props.page.tokens.map((token, index) =>
        <Tokenized key={ index } content={ props.page.content } token={ token } />
    )

    return (
        <div 
            className="page-content" 
            data-toogle="false"
            onClick={ handleClick } 
            onMouseEnter={ handleMouse } 
            onMouseLeave={ handleMouse }
        >
            <span className="page-text-toogle d-none" >
                <FontAwesomeIcon icon={solid('eye')} border />
            </span>

            <p className="page-text-content">
                { props.page.content }
            </p>

            <p className="page-text-tokenized d-none">
                { tokenized }
            </p>
        </div>
    );
}

export default Content;