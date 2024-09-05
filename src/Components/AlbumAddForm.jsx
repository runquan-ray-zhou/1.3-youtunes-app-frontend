
import { useEffect, useState } from "react"
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

    const [newArtistAlbum, setNewArtistAlbum] = useState({
        artist_id: "",
        album_id: "",
    })

    console.log(newArtistAlbum)

    function addAlbumToLibrary() {
        fetch(`${API}/albums`, {
            method: "POST",
            body: JSON.stringify(newAlbum),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(console.log("album added"))
        // .then((resJSON) => {
        //     navigate(`/albums/${resJSON.id}`)
        // })
        .catch(error => console.error(error))
    }

    function handleTextChange(e) {
        setNewAlbum({...newAlbum, [e.target.id]: e.target.value})
    }
    
    function handleCheckboxChange() {
        setNewAlbum({...newAlbum, is_favorite: !newAlbum.is_favorite})
    }
    async function addArtistId(artistName) {
        try {
            const response = await fetch(`${API}/artists`);
            const responseJSON = await response.json();
            console.log('Fetched artists:', responseJSON);
            const artist = responseJSON.find((artist) => artist.artist_name === artistName);
            console.log('Found artist:', artist);
            if (artist) {
                setNewArtistAlbum(prevArtistAlbum => ({...prevArtistAlbum, artist_id: artist.id}));
                return artist.id;
            } else {
                console.log('Artist not found:', artistName);
            }
        } catch (error) {
            console.error('Error adding artist ID:', error);
        }
    }
    
    async function addAlbumId(albumName) {
        try {
            const response = await fetch(`${API}/albums`);
            const responseJSON = await response.json();
            console.log('Fetched albums:', responseJSON);
            const album = responseJSON.find((album) => album.album_name === albumName);
            console.log('Found album:', album);
            if (album) {
                setNewArtistAlbum(prevArtistAlbum => ({...prevArtistAlbum, album_id: album.id}));
                return album.id;
            } else {
                console.log('Album not found:', albumName);
            }
        } catch (error) {
            console.error('Error adding album ID:', error);
        }
    }

    function addAlbumToArtist(updatedArtistId, updatedAlbumId) {
        console.log(updatedArtistId, updatedAlbumId)
        fetch(`${API}/artists/${updatedArtistId}/albums/${updatedAlbumId}`, {
            method: "POST",
            body: JSON.stringify({
                artist_id: updatedArtistId,
                album_id: updatedAlbumId,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then((resJSON) => {
            navigate(`/artists/${updatedArtistId}/albums`)
        })
        .catch(error => console.error(error))
    }
    
    async function handleSubmit(e) {
        e.preventDefault()
        await addAlbumToLibrary()
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        let updatedArtistId, updatedAlbumId;
    
        try {
            if (newAlbum.album_artist) {
                updatedArtistId = await addArtistId(newAlbum.album_artist);
            }
            if (newAlbum.album_name) {
                updatedAlbumId = await addAlbumId(newAlbum.album_name);
            }
        } catch (error) {
            console.error('Error adding album ID:', error);
        }
        await addAlbumToArtist(updatedArtistId, updatedAlbumId)
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