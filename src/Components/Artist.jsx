import { Link, useNavigate } from "react-router-dom"
import "./Artist.css"

const API = import.meta.env.VITE_API_URL

export default function Artist({ artist }) {
    
    let navigate = useNavigate()

    return (
        <Link to={`/artists/${artist.id}/songs`}>
            <div className="Artist">
                <div className="artist__img">
                    <span>
                    <img src={artist.img_url} alt={artist.name} />
                    </span>
                </div>
                <div className="artist__details">
                    <p className="artist__name">{artist.name}</p>
                    <p className="artist__main_genre">{artist.main_genre}</p>
                </div>
            </div>
        </Link>
    )
}