import { useState } from "react";
import Albums from "../Components/Albums";
import Artists from "../Components/Artists";
import Playlists from "../Components/Playlists";
import "./Home.css"

export default function Home() {

    const [view, setView] = useState("Albums")
    
    return (
        <div className="Home">
            <div className="Home__header">
                <h1 onClick={(e) => setView(e.target.innerHTML)} style={{color: view === "Albums" ? "#4CE0D2" : "white" }}>Albums</h1>
                <h1 onClick={(e) => setView(e.target.innerHTML)} style={{color: view === "Artists" ? "#4CE0D2" : "white" }}>Artists</h1>
                <h1 onClick={(e) => setView(e.target.innerHTML)} style={{color: view === "Playlists" ? "#4CE0D2" : "white" }}>Playlists</h1>
            </div>
            <div className="Home__content">
                {view === "Albums" ? <Albums /> : view === "Artists" ? <Artists /> : <Playlists />}
            </div>
        </div>
    )
}