import '../styles/Alert.css';

function Page(props) {
    if (!props.content) {
        return null;
    }

    return (
        <div className="page">
            Page ...
            { props.content }
        </div>
    );

}

export default Page;