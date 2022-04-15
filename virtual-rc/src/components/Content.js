import '../styles/Alert.css';

function Content(props) {
    if (!props.page) {
        return null;
    }

    return (
        <div className="page-content">
            { props.page.pageIndex }
            { props.page.content }
        </div>
    );
}

// const page = React.createElement('h1', {
//     className: 'greeting'
// },
// 'Hello, world!'
// );

export default Content;