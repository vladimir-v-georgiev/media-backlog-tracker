function Update() {
    return (
        <>
            <form id="form">
                <label htmlFor="title">Title</label><br />
                <input type="text" id="title" name="title" /><br />
                <label htmlFor="length">Length</label><br />
                <input type="text" id="length" name="length" /><br />
                <label htmlFor="genre">Genre</label><br />
                <input type="text" id="genre" name="genre" /><br />
                <button type="submit">Submit</button>
            </form>
            <div id="responseBox"></div>
        </>
    )
}

export default Update;