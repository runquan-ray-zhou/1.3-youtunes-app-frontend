import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Album from "./Album";
import "./ArtistDetails.css";

const API = import.meta.env.VITE_API_URL;

export default function ArtistDetails() {
  const [artist, setArtist] = useState({});
  const [artistAlbums, setArtistAlbums] = useState([]);

  const { artist_id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/artists/${artist_id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setArtist(responseJSON);
      })
      .catch(() => {
        navigate("/notfound");
        console.error(error);
      });
  }, [artist_id, navigate]);

  useEffect(() => {
    fetch(`${API}/artists/${artist_id}/albums`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setArtistAlbums(responseJSON);
      })
      .catch((error) => {
        navigate("/notfound");
        console.error(error);
      });
  }, [artist_id, navigate]);

  function handleDelete() {
    fetch(`${API}/artists/${artist_id}`, {
      method: "DELETE",
    })
      .then(() => navigate("/home"))
      .catch(() => {
        navigate("/notfound");
        console.error(error);
      });
  }

  return (
    <div className="ArtistDetails">
      <div>
        <span>
          <img
            className="artist__img"
            src={artist.artist_img_url}
            alt={artist.artist_name}
          />
        </span>
      </div>
      <div className="artist__details">
        <p className="artist__name">{artist.artist_name}</p>
        <p className="artist__main_genre">{artist.main_genre}</p>
        <a
          className="artist__website_url"
          href={artist.website_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {artist.website_url}
        </a>
        <p>Albums:</p>
      </div>
      <div className="artist__albums">
        {artistAlbums.map((album) => {
          return <Album key={album.album_name} album={album} />;
        })}
      </div>
      <div className="artist__buttons">
        <i
          className="fa-solid fa-gear"
          onClick={() => navigate(`/artists/${artist_id}/edit`)}
        ></i>
        <i
          className="fa-solid fa-compact-disc"
          onClick={() => navigate(`/add/album`)}
        ></i>
        <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
      </div>
    </div>
  );
}
