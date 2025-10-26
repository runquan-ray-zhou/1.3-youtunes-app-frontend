import { useParams, useNavigate } from "react-router-dom";
import Albums from "../Components/Albums";
import Artists from "../Components/Artists";
import Playlists from "../Components/Playlists";
import "./Home.css";

export default function Home() {
  const { type } = useParams();
  const navigate = useNavigate();

  // Normalize the view from the URL param, defaulting to "albums"
  const normalizedView = type ? type.toLowerCase() : "albums";

  const navItems = ["Albums", "Artists", "Playlists"];

  const handleNavigation = (selectedView) => {
    // Navigate using lowercase for URL consistency
    navigate(`/home/${selectedView.toLowerCase()}`);
  };

  const getColor = (item) =>
    normalizedView === item.toLowerCase() ? "#4CE0D2" : "white";

  return (
    <div className="Home">
      <div className="Home__header">
        {navItems.map((item) => (
          <h1
            key={item}
            onClick={() => handleNavigation(item)}
            style={{ color: getColor(item) }}
          >
            {item}
          </h1>
        ))}
      </div>
      <div className="Home__content">
        {normalizedView === "albums" ? (
          <Albums />
        ) : normalizedView === "artists" ? (
          <Artists />
        ) : (
          <Playlists />
        )}
      </div>
    </div>
  );
}
