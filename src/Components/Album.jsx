import { Link, useNavigate } from "react-router-dom"
import "./Album.css"

const API = import.meta.env.VITE_API_URL

export default function Album({ album }) {
    
    let navigate = useNavigate()

    return (
        <Link to={`/albums/${album.id}`}>
            <div className="Album">
                <div className="album__img">
                    <span>
                    <img src={album.album_img_url} alt={album.album_name} />
                    </span>
                </div>
                <div className="album__details">
                    <p className="album__name">{album.album_name}</p>
                    <p className="album__album_artist">{album.album_artist}</p>
                </div>
            </div>
        </Link>
    )
}