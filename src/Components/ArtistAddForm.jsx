import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AddForm.css"

const API = import.meta.env.VITE_API_URL

export default function ArtistAddForm() {

    let navigate = useNavigate();

    const [newArtist, setNewArtist] = useState({
        artist_name: "",
        website_url: "",
        artist_img_url: "",
        main_genre: "",
        is_favorite: false,
    })

    function addArtistToLibrary() {
        fetch(`${API}/artists/songs`, {
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
        setNewArtist({...newArtist, [e.target.id]: e.target.value})
        
    }
    
    function handleCheckboxChange() {
        setNewArtist({...newArtist, is_favorite: !newArtist.is_favorite})
    }

    function handleSubmit(e) {
        e.preventDefault()
        addArtistToLibrary()
    }
    return (
        <div className="AddFrom">
            <h1>Add An Artist</h1>
            <form className="AddForm__form" onSubmit={handleSubmit}>
                <label htmlFor="artist_name">
                    Artist Name:
                    <br />
                    <input 
                        type="text"
                        id="artist_name"
                        value={newArtist.artist_name}
                        onChange={handleTextChange}
                        required
                    />
                </label>
                <br />
                <label htmlFor="website_url">
                    Artist Homepage URL:
                    <br />
                    <input 
                        type="text"
                        id="website_url"
                        value={newArtist.website_url}
                        onChange={handleTextChange}
                        required
                    />
                </label>
                <br />
                <label htmlFor="artist_img_url">
                    Artist Photo:
                    <br />
                    <input
                        type="text"
                        id="artist_img_url"
                        value={newArtist.artist_img_url}
                        onChange={handleTextChange}
                    />
                </label>
                <br />
                <label htmlFor="main_genre">
                    Artist Main Genre:
                    <br />
                    <input
                        type="text"
                        id="main_genre"
                        value={newArtist.main_genre}
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
                        checked={newArtist.is_favorite}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Artist To Youtunes</button>
            </form>
        </div>
    )
}