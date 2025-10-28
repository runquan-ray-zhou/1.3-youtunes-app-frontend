import SongEditForm from "../Components/SongEditForm";
import ArtistEditForm from "../Components/ArtistEditForm";
import "./Edit.css";

export default function Edit({ type }) {
  const normalizedType = type ? type.toLowerCase() : "";

  return (
    <div className="Edit">
      <div className="Edit__content">
        {normalizedType === "artist" ? (
          <ArtistEditForm />
        ) : normalizedType === "song" ? (
          <SongEditForm />
        ) : (
          <p>Album Edit</p>
        )}
      </div>
    </div>
  );
}
