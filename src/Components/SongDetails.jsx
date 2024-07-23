import { useEffect, useState } from "react"
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
                <div className="song__img">
                    <span>
                    <img src={song.img_url} alt={song.name} />
                    </span>
                </div>
                <div className="song__details">
                    <p className="song__name">{song.name}</p>
                    <p className="song__artist">{song.artist}</p>
                    <p className="song__album">{song.album}</p>
                    <p className="song__time">{song.time}</p>
                </div>
        </div>
    )
}