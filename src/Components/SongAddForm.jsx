import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AddForm.css"

const API = import.meta.env.VITE_API_URL

export default function SongAddForm() {

    let navigate = useNavigate();

    const [newSong, setNewSong] = useState({
        song_name: "",
        song_artist: "",
        album: "",
        time: "",
        img_url: "",
        song_vid_url: "",
        is_favorite: false,
    })

    function addSongToLibrary() {
        fetch(`${API}/addsong`, {
            method: "POST",
            body: JSON.stringify(newSong),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then((resJSON) => {
            navigate(`/albums/${resJSON.album_id}/songs/${resJSON.id}`)
        })
        .catch(error => console.error(error))
    }

    function handleTextChange(e) {
        setNewSong({...newSong, [e.target.id]: e.target.value})
    }
    
    function handleCheckboxChange() {
        setNewSong({...newSong, is_favorite: !newSong.is_favorite})
    }

    async function addArtistId(artistName) {
        try {
            const response = await fetch(`${API}/artists`);
            const responseJSON = await response.json();
            const artist = responseJSON.find((artist) => artist.artist_name === artistName);
            if (artist) {
                setNewSong(prevSong => ({...prevSong, artist_id: artist.id}));
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
                setNewSong(prevSong => ({...prevSong, album_id: album.id}));
            } else {
                console.log('Album not found:', albumName);
            }
        } catch (error) {
            console.error('Error adding album ID:', error);
        }
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        if (newSong.album) {
            await addAlbumId(newSong.album);
        }
        if (newSong.song_artist) {
            await addArtistId(newSong.song_artist);
        }
        await addSongToLibrary();
    }
    return (
        <div className="AddFrom">
            <h1>Add A Song</h1>
            <form className="AddForm__form" onSubmit={handleSubmit}>
                <label htmlFor="song_name">
                    Song Name:
                    <br />
                    <input 
                        type="text"
                        id="song_name"
                        value={newSong.song_name}
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
                        value={newSong.song_artist}
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
                <label htmlFor="song_vid_url">
                    Youtube URL:
                    <br />
                    <input 
                        type="text"
                        id="song_vid_url"
                        value={newSong.song_vid_url}
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
                <button type="submit">Add Song To Youtunes</button>
            </form>
        </div>
    )
}