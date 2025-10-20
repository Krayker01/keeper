function Note(props) {
    return (
        <div style={{ flex: 1 }}>
            <div className="classForNoteDivs">
                <h2 className="bbh-sans-hegarty-regular">{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Note;