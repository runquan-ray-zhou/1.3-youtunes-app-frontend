import { useEffect, useState } from "react"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./SongDetails.css"
const API = import.meta.env.VITE_API_URL


export default function SongDetails() {
    
    const [ song, setSong ] = useState({})
    const [ moveTimer, setMoveTimer ] = useState(false)
    
    const { id } = useParams()
    
    let navigate = useNavigate()
    
    function handleStartTImer() {
        console.log("start timer");
        setMoveTimer(true)
      }
      
      function handleStopTimer() {
        console.log("timer stop");
        setMoveTimer(false)
      }

    React.useEffect(() => {
        window.addEventListener("focus", handleStopTimer);
        window.addEventListener("blur", handleStartTImer);
        return () => {
          window.removeEventListener("focus", handleStopTimer);
          window.removeEventListener("blur", handleStartTImer);
        };
      });

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
        </div>
    )
}