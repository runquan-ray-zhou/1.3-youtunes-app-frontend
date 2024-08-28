import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./SongEditForm.css"

const API = import.meta.env.VITE_API_URL

export default function SongEditForm() {

    let { id } = useParams();
    let navigate = useNavigate()
    
    const [currentSong, setCurrentSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        img_url: "",
        vid_url: "",
        is_favorite: false,
    })

    function handleTextChange(e) {
        setCurrentSong({...currentSong, [e.target.id]: e.target.value})
        
    }
    
    function handleCheckboxChange() {
        setCurrentSong({...currentSong, is_favorite: !currentSong.is_favorite})
    }

    function updateSong() {
        fetch(`${API}/songs/${id}`, {
            method: "PUT",
            body: JSON.stringify(currentSong),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            navigate(`/songs/${id}`);
        })
        .catch((error) => {
            navigate("/notfound")
            console.error(error)
        })
    }

    useEffect(() => {
        fetch(`${API}/songs/${id}`)
        .then((response) => response.json())
        .then((responseJSON) => setCurrentSong(responseJSON))
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
            <form className="EditForm__form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Song Name:
                    <br />
                    <input 
                        type="text"
                        id="name"
                        value={currentSong.name}
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
                        value={currentSong.artist}
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
                <label htmlFor="vid_url">
                    Youtube URL:
                    <br />
                    <input 
                        type="text"
                        id="vid_url"
                        value={currentSong.vid_url}
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