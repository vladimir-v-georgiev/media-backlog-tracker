function Remove() {
    return (
        <>
            <form id="form">
                <label htmlFor="title">Title</label><br />
                <input type="text" id="title" name="title" /><br />
                <button type="submit">Submit</button>
            </form>
            <div id="responseBox"></div>
        </>
    )
}

export default Remove;