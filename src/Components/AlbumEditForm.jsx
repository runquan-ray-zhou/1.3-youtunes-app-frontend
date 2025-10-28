import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditForm.css";

const API = import.meta.env.VITE_API_URL;

export default function AlbumEditForm() {
  let { album_id } = useParams();
  let navigate = useNavigate();

  const [currentAlbum, setCurrentAlbum] = useState({
    album_name: "",
    album_img_url: "",
    is_favorite: false,
    album_artist: "",
  });

  function handleTextChange(e) {
    setCurrentAlbum({ ...currentAlbum, [e.target.id]: e.target.value });
  }

  function handleCheckboxChange() {
    setCurrentAlbum({
      ...currentAlbum,
      is_favorite: !currentAlbum.is_favorite,
    });
  }

  function updateAlbum() {
    fetch(`${API}/albums/${album_id}`, {
      method: "PUT",
      body: JSON.stringify(currentAlbum),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        navigate(`/albums/${album_id}/songs`);
      })
      .catch((error) => {
        navigate("/notfound");
        console.log(error);
      });
  }

  useEffect(() => {
    fetch(`${API}/albums/${album_id}`)
      .then((response) => response.json())
      .then((responseJSON) => setCurrentAlbum(responseJSON))
      .catch((error) => {
        navigate("/notfound");
        console.log(error);
      });
  }, [album_id]);

  function handleSubmit(e) {
    e.preventDefault();
    updateAlbum();
  }

  return (
    <div className="EditForm">
      <h1>Edit An Album</h1>
      <form className="EditForm__form" onSubmit={handleSubmit}>
        <label htmlFor="album_name">
          Album Name:
          <br />
          <input
            type="text"
            id="album_name"
            value={currentAlbum.album_name}
            onChange={handleTextChange}
            required
          />
        </label>
        <br />
        <label htmlFor="album_img_url">
          Album Image URL:
          <br />
          <input
            type="text"
            id="album_img_url"
            value={currentAlbum.album_img_url}
            onChange={handleTextChange}
            required
          />
        </label>
        <br />
        <label htmlFor="album_artist">
          Album Artist:
          <br />
          <input
            type="text"
            id="album_artist"
            value={currentAlbum.album_artist}
            onChange={handleTextChange}
          />
        </label>
        <br />
        <label htmlFor="is_favorite">
          Favorite:
          <br />
          <input
            type="checkbox"
            id="is_favorite"
            onChange={handleCheckboxChange}
            checked={currentAlbum.is_favorite}
            required
          />
        </label>
        <br />
        <button type="submit">Update Album</button>
      </form>
    </div>
  );
}
