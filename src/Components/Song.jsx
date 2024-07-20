import { Link, useNavigate } from "react-router-dom"
import "./Song.css"

const API = import.meta.env.VITE_API_URL

export default function Song({ song }) {
    let navigate = useNavigate()

    return (
        <div className="Song">
            <span className="song__name">
            <p>{song.name}</p>
            </span>
            <span className="song__artist">
            <p>{song.artist}</p>
            </span>
            <span className="song__album">
            <p>{song.album}</p>
            </span>
            <span className="song__time">
            <p>{song.time}</p>
            </span>
            <span className="song__isFavorite">
            <p>{song.is_favorite ? `❤️` : `❌`}</p>
            </span>
        </div>
    )
}