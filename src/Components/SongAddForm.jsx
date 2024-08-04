import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SongAddForm.css"

const API = import.meta.env.VITE_API_URL

export default function SongAddForm() {

    let navigate = useNavigate();

    const [newSong, setNewSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        img_url: "",
        vid_url: "",
        is_favorite: false,
    })

    function addSongToLibrary() {
        fetch(`${API}/songs`, {
            method: "POST",
            body: JSON.stringify(newSong),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then((resJSON) => {
            navigate(`/songs/${resJSON.id}`)
        })
        .catch(error => console.error(error))
    }

    function handleTextChange(e) {
        setNewSong({...newSong, [e.target.id]: e.target.value})
        
    }
    
    function handleCheckboxChange() {
        setNewSong({...newSong, is_favorite: !newSong.is_favorite})
    }

    function handleSubmit(e) {
        e.preventDefault()
        addSongToLibrary()
    }
    return (
        <div className="SongAddFrom">
            <form className="SongAddForm__form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Song Name:
                    <br />
                    <input 
                        type="text"
                        id="name"
                        value={newSong.name}
                        onChange={handleTextChange}
                        required
                    />
                </label>
                <br />
                <label htmlFor="artist">
                    Artist Name:
                    <br />
                    <input 
                        type="text"
                        id="artist"
                        value={newSong.artist}
                        onChange={handleTextChange}
                        required
                    />
                </label>
                <br />
                <label htmlFor="album">
                    Album Name:
                    <br />
                    <input
                        type="text"
                        id="album"
                        value={newSong.album}
                        onChange={handleTextChange}
                    />
                </label>
                <br />
                <label htmlFor="time">
                    Song Time:
                    <br />
                    <input
                        type="text"
                        id="time"
                        value={newSong.time}
                        onChange={handleTextChange}
                    />
                </label>
                <br />
                <label htmlFor="img_url">
                    EP Image URL:
                    <br />
                    <input
                        type="text"
                        id="img_url"
                        required
                        value={newSong.img_url}
                        onChange={handleTextChange}
                    />
                </label>
                <br />
                <label htmlFor="vid_url">
                    Youtube URL:
                    <br />
                    <input 
                        type="text"
                        id="vid_url"
                        value={newSong.vid_url}
                        onChange={handleTextChange}
                        required
                    />
                </label>
                <br />
                <label htmlFor="is_favorite">
                    Favorite:
                    <br />
                    <input 
                        type="checkbox"
                        id="is_favorite"
                        onChange={handleCheckboxChange}
                        checked={newSong.is_favorite}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Song To Library</button>
            </form>
        </div>
    )
}