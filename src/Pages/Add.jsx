import { useState } from "react";
import SongAddForm from "../Components/SongAddForm";
import AlbumAddForm from "../Components/AlbumAddForm";
import "./Add.css"
import ArtistAddForm from "../Components/ArtistAddForm";

export default function Add() {

    const [view, setView] = useState("Song")
    
    return (
        <div className="Add">
            <div className="Add__header">
                <h1 onClick={(e) => setView(e.target.innerHTML)} style={{color: view === "Album" ? "#4CE0D2" : "white" }}>Album</h1>
                <h1 onClick={(e) => setView(e.target.innerHTML)} style={{color: view === "Artist" ? "#4CE0D2" : "white" }}>Artist</h1>
                <h1 onClick={(e) => setView(e.target.innerHTML)} style={{color: view === "Song" ? "#4CE0D2" : "white" }}>Song</h1>
            </div>
            <div className="Add__content">
                {view === "Song" ? <SongAddForm /> : view === "Album" ? <AlbumAddForm /> : <ArtistAddForm />}
            </div>
        </div>
    )
}