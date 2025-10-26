import { useParams, useNavigate } from "react-router-dom";
import SongAddForm from "../Components/SongAddForm";
import AlbumAddForm from "../Components/AlbumAddForm";
import ArtistAddForm from "../Components/ArtistAddForm";

import "./Add.css";

export default function Add() {
  const { type } = useParams();
  const navigate = useNavigate();

  // Normalize the view from the URL param, defaulting to "Song"
  const normalizedView = type ? type.toLowerCase() : "song";

  const handleNavigation = (newView) => {
    // Navigate using lowercase for URL consistency
    navigate(`/add/${newView.toLowerCase()}`);
  };

  const getColor = (viewName) =>
    normalizedView === viewName.toLowerCase() ? "#4CE0D2" : "white";

  return (
    <div className="Add">
      <div className="Add__header">
        {["Album", "Artist", "Song"].map((viewName) => (
          <h1
            key={viewName}
            onClick={() => handleNavigation(viewName)}
            style={{ color: getColor(viewName) }}
          >
            {viewName}
          </h1>
        ))}
      </div>
      <div className="Add__content">
        {normalizedView === "song" ? (
          <SongAddForm />
        ) : normalizedView === "album" ? (
          <AlbumAddForm />
        ) : (
          <ArtistAddForm />
        )}
      </div>
    </div>
  );
}
