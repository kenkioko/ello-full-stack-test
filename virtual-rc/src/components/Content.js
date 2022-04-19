import '../styles/Alert.css';

function showTokenized(event) {
    var children = event.currentTarget.children;
    console.log(children);

    for (let element of children) {
        element.classList.toggle("d-none");
        console.log(element);
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
        <div className="page-content" onClick={ showTokenized }>
            {/* { props.page.pageIndex } */}

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