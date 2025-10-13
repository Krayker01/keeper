function Note({ classForNoteDivs }) {
    return (
        <div style={{ flex: 1 }}>
            <div className={classForNoteDivs}>
                <h2 className="bbh-sans-hegarty-regular">This is the Note title</h2>
                <p>This is the Note content</p>
            </div>
        </div>
    )
}

export default Note;