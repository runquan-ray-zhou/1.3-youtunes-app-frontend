import { Link, useNavigate } from "react-router-dom"
import "./Song.css"

const API = import.meta.env.VITE_API_URL

export default function Song({ song }) {
    
    let navigate = useNavigate()

    return (
        <Link to={`/albums/${song.album_id}/songs/${song.id}`}>
            <div className="Song">
                <div className="song__img">
                    <span>
                    <img src={song.img_url} alt={song.name} />
                    </span>
                </div>
                <div className="song__details">
                    <p className="song__album">{song.album} - </p>
                    &nbsp;
                    <p className="song__name">{song.song_name}</p>
                    {/* <p className="song__artist">{song.song_artist}</p> */}
                    &nbsp;
                    <p> - {song.time}</p>
                </div>
            </div>
        </Link>
    )
}