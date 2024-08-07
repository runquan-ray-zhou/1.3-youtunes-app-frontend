import { Link, useNavigate } from "react-router-dom"
import "./Song.css"

const API = import.meta.env.VITE_API_URL

export default function Song({ song }) {
    
    let navigate = useNavigate()

    return (
        <Link to={`/artists/${song.artist_id}/songs/${song.id}`}>
            <div className="Song">
                <div className="song__img">
                    <span>
                    <img src={song.img_url} alt={song.name} />
                    </span>
                </div>
                <div className="song__details">
                    <p className="song__name">{song.name}</p>
                    <p className="song__artist">{song.artist}</p>
                </div>
            </div>
        </Link>
    )
}