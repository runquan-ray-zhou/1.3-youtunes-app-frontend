import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ArtistEditForm.css";

const API = import.meta.env.VITE_API_URL;

export default function ArtistEditForm() {
  let { artist_id } = useParams();
  let navigate = useNavigate();

  const [currentArtist, setCurrentArtist] = useState({
    artist_name: "",
    website_url: "",
    artist_img_url: "",
    main_genre: "",
    is_favorite: false,
  });

  function handleTextChange(e) {
    setCurrentArtist({ ...currentArtist, [e.target.id]: e.target.value });
  }

  function handleCheckboxChange() {
    setCurrentArtist({
      ...currentArtist,
      is_favorite: !currentArtist.is_favorite,
    });
  }

  function updateArtist() {
    fetch(`${API}/artists/${artist_id}`, {
      method: "PUT",
      body: JSON.stringify(currentArtist),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        navigate(`/artists/${artist_id}/albums`);
      })
      .catch((error) => {
        navigate("/notfound");
        console.error(error);
      });
  }

  useEffect(() => {
    fetch(`${API}/artists/${artist_id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setCurrentArtist(responseJSON);
      })

      .catch(() => {
        navigate("/notfound");
        console.error(error);
      });
  }, [artist_id]);

  function handleSubmit(e) {
    e.preventDefault();
    updateArtist();
  }

  return (
    <div className="EditForm">
      <h1>Edit An Artist</h1>
      <form className="EditForm__form" onSubmit={handleSubmit}>
        <label htmlFor="artist_name">
          Artist Name:
          <br />
          <input
            type="text"
            id="artist_name"
            value={currentArtist.artist_name}
            onChange={handleTextChange}
            required
          />
        </label>
        <br />
        <label htmlFor="website_url">
          Artist Homepage URL:
          <br />
          <input
            type="text"
            id="website_url"
            value={currentArtist.website_url}
            onChange={handleTextChange}
            required
          />
        </label>
        <br />
        <label htmlFor="artist_img_url">
          Artist Photo:
          <br />
          <input
            type="text"
            id="artist_img_url"
            value={currentArtist.artist_img_url}
            onChange={handleTextChange}
          />
        </label>
        <br />
        <label htmlFor="main_genre">
          Artist Main Genre:
          <br />
          <input
            type="text"
            id="main_genre"
            value={currentArtist.main_genre}
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
            checked={currentArtist.is_favorite}
            required
          />
        </label>
        <br />
        <button type="submit">Update Artist</button>
      </form>
    </div>
  );
}
