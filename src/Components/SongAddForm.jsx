import "./SongAddForm.css"

export default function SongAddForm() {

    return (
        <div className="SongAddFrom">
            <form className="SongAddForm__form" action="">
                <label htmlFor="name">
                    Name
                    <br />
                    <input 
                        type="text"
                        id="name"
                        required
                    />
                </label>
                <br />
                <label htmlFor="artist">
                    Artist
                    <br />
                    <input 
                        type="text"
                        id="name"
                        required
                    />
                </label>
                <br />
                <label htmlFor="vid_url">
                    Youtube URL
                    <br />
                    <input 
                        type="text"
                        id="vid_url"
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Song To Library</button>
            </form>
        </div>
    )
}