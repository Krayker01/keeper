function Note(props) {
    return (
        <div className="classForNoteDivs">
            <h2 className="bbh-sans-hegarty-regular">{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;