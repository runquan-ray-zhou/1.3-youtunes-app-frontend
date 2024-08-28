
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AddForm.css"

const API = import.meta.env.VITE_API_URL

export default function AlbumAddForm() {

    let navigate = useNavigate();

    const [newAlbum, setNewAlbum] = useState({
        album_name: "",
        album_img_url: "",
        is_favorite: false,
        album_artist: "",
    })

    function addAlbumToLibrary() {
        fetch(`${API}/artists/albums`, {
            method: "POST",
            body: JSON.stringify(newAlbum),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then((resJSON) => {
            navigate(`/albums/${resJSON.id}`)
        })
        .catch(error => console.error(error))
    }

    function handleTextChange(e) {
        setNewAlbum({...newAlbum, [e.target.id]: e.target.value})
        
    }
    
    function handleCheckboxChange() {
        setNewAlbum({...newAlbum, is_favorite: !newAlbum.is_favorite})
    }

    function handleSubmit(e) {
        e.preventDefault()
        addAlbumToLibrary()
    }
    return (
        <div className="AddFrom">
            <h1>Add An Album</h1>
            <form className="AddForm__form" onSubmit={handleSubmit}>
                <label htmlFor="album_name">
                    Album Name:
                    <br />
                    <input 
                        type="text"
                        id="album_name"
                        value={newAlbum.album_name}
                        onChange={handleTextChange}
                        required
                    />
                </label>
                <br />
                <label htmlFor="album_img_url">
                    Album Image URL:
                    <br />
                    <input 
                        type="text"
                        id="album_img_url"
                        value={newAlbum.album_img_url}
                        onChange={handleTextChange}
                        required
                    />
                </label>
                <br />
                <label htmlFor="album_artist">
                    Album Artist:
                    <br />
                    <input
                        type="text"
                        id="album_artist"
                        value={newAlbum.album_artist}
                        onChange={handleTextChange}
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
                        checked={newAlbum.is_favorite}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Album To Youtunes</button>
            </form>
        </div>
    )
}