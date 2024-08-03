import { useEffect, useState } from "react"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./SongDetails.css"
const API = import.meta.env.VITE_API_URL


export default function SongDetails() {
    
    const [ song, setSong ] = useState({})
    
    const { id } = useParams()
    
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`${API}/songs/${id}`)
        .then((response) => response.json())
        .then((responseJSON) => setSong(responseJSON))
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
    }, [id, navigate])

    return (
        <div className="SongDetails">
                <div>
                <iframe
                    width="300"
                    height="175"
                    style={{border: "none"}}
                    src={`https://www.youtube.com/embed/${song.vid_url}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
                <div className="song__details">
                        <p className="song__name">{song.name}</p>
                        <p className="song__artist">{song.artist}</p>
                </div>
                <div className="song__img">
                    <span>
                        <img src={song.img_url} alt={song.name} />
                    </span>
                </div>
                <div className="song__buttons">
                <i className="fa-solid fa-circle-arrow-left" onClick={() => navigate("/songs")}></i>
                <i className="fa-solid fa-gear"></i>
                <i className="fa-solid fa-trash-can"></i>
                </div>
        </div>
    )
}