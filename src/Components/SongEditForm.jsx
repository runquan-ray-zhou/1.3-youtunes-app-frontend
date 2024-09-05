import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./SongEditForm.css"

const API = import.meta.env.VITE_API_URL

export default function SongEditForm() {

    let { id, album_id } = useParams();
    let navigate = useNavigate()
    
    const [currentSong, setCurrentSong] = useState({
        song_name: "",
        song_artist: "",
        album: "",
        time: "",
        img_url: "",
        song_vid_url: "",
        is_favorite: false,
    })

    console.log(currentSong)

    function handleTextChange(e) {
        setCurrentSong({...currentSong, [e.target.id]: e.target.value})
    }
    
    function handleCheckboxChange() {
        setCurrentSong({...currentSong, is_favorite: !currentSong.is_favorite})
    }

    function updateSong() {
        fetch(`${API}/albums/${album_id}/songs/${id}`, {
            method: "PUT",
            body: JSON.stringify(currentSong),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            navigate(`/albums/${album_id}/songs/${id}`);
        })
        .catch((error) => {
            navigate("/notfound")
            console.error(error)
        })
    }

    useEffect(() => {
        fetch(`${API}/albums/${album_id}/songs/${id}`)
        .then((response) => response.json())
        .then((responseJSON) => setCurrentSong(responseJSON.song))
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
    }, [id])

    function handleSubmit(e) {
        e.preventDefault()
        updateSong()
    }

    return (
        <div className="EditFrom">
            <h1>Edit A Song</h1>
            <form className="EditForm__form" onSubmit={handleSubmit}>
                <label htmlFor="song_name">
                    Song Name:
                    <br />
                    <input 
                        type="text"
                        id="song_name"
                        value={currentSong.song_name}
                        onChange={handleTextChange}
                        required
                    />
                </label>
                <br />
                <label htmlFor="song_artist">
                    Artist Name:
                    <br />
                    <input 
                        type="text"
                        id="song_artist"
                        value={currentSong.song_artist}
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
                        value={currentSong.album}
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
                        value={currentSong.time}
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
                        value={currentSong.img_url}
                        onChange={handleTextChange}
                    />
                </label>
                <br />
                <label htmlFor="song_vid_url">
                    Youtube URL:
                    <br />
                    <input 
                        type="text"
                        id="song_vid_url"
                        value={currentSong.song_vid_url}
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
                        checked={currentSong.is_favorite}
                        required
                    />
                </label>
                <br />
                <button type="submit">Update Song</button>
            </form>
        </div>
    )
}