import { Link, useNavigate } from "react-router-dom";
import "./Artist.css";

const API = import.meta.env.VITE_API_URL;

export default function Artist({ artist }) {
  let navigate = useNavigate();

  return (
    <Link to={`/artists/${artist.id}/albums`}>
      <div className="Artist">
        <div className="artist__img">
          <img src={artist.artist_img_url} alt={artist.artist_name} />
        </div>
        <div className="artist__details">
          <p className="artist__name">{artist.artist_name}</p>
          <p className="artist__main_genre">{artist.main_genre}</p>
        </div>
      </div>
    </Link>
  );
}
