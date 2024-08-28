import { useEffect, useState } from "react"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./SongDetails.css"
const API = import.meta.env.VITE_API_URL


export default function SongDetails() {
    
    const [ song, setSong ] = useState({})
    
    const { id, album_id } = useParams()

    console.log(album_id)
    
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`${API}/albums/${album_id}/songs/${id}`)
        .then((response) => response.json())
        .then((responseJSON) => setSong(responseJSON.song))
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
    }, [id, album_id, navigate])

    console.log(song)

    function handleDelete() {
        fetch(`${API}/artists/${artist_id}/songs/${id}`, {
            method: "DELETE",
        })
        .then(() => navigate('/allsongs'))
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
    }

    return (
        <div className="SongDetails">
                <div>
                <iframe
                    width="300"
                    height="175"
                    style={{border: "none"}}
                    src={`https://www.youtube.com/embed/${song.song_vid_url}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
                <div className="song__details">
                        <p className="song__name">{song.song_name}</p>
                        <p className="song__artist">{song.song_artist}</p>
                </div>
                <div className="song__img">
                    <span>
                        <img src={song.img_url} alt={song.name} />
                    </span>
                </div>
                <div className="song__buttons">
                <i className="fa-solid fa-circle-arrow-left" onClick={() => navigate(`/artists/${song.artist_id}/songs`)}></i>
                <i className="fa-solid fa-gear" onClick={() => navigate(`/songs/${id}/edit`)}></i>
                <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
        </div>
    )
}