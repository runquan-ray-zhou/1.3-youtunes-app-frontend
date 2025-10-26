import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Artist from "./Artist.jsx";
import "./Artists.css";

const API = import.meta.env.VITE_API_URL;

export default function Artists() {
  let navigate = useNavigate();

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch(`${API}/artists`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setArtists(responseJSON);
        console.log(responseJSON);
      })
      .catch((error) => {
        navigate("/notfound");
        console.error(error);
      });
  }, []);

  return (
    <div className="Artists">
      <h1>Youtunes Artists</h1>
      {artists.map((artist) => {
        return <Artist key={artist.id} artist={artist} />;
      })}
    </div>
  );
}
