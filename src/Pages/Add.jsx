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
                <h1 onClick={(e) => setView(e.target.innerHTML)}>Album</h1>
                <h1 onClick={(e) => setView(e.target.innerHTML)}>Artist</h1>
                <h1 onClick={(e) => setView(e.target.innerHTML)}>Song</h1>
            </div>
            <div className="Add__content">
                {view === "Song" ? <SongAddForm /> : view === "Album" ? <AlbumAddForm /> : <ArtistAddForm />}
            </div>
        </div>
    )
}