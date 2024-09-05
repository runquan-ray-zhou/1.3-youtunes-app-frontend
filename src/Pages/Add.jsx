import { useState } from "react";
import { useParams } from "react-router-dom";
import SongAddForm from "../Components/SongAddForm";
import AlbumAddForm from "../Components/AlbumAddForm";
import ArtistAddForm from "../Components/ArtistAddForm";
import "./Add.css"

export default function Add() {

    const { type } = useParams();

    const [view, setView] = useState(type || "Song")

    console.log(type)
    
    return (
        <div className="Add">
            <div className="Add__header">
                <h1 onClick={(e) => setView(e.target.innerHTML)} style={{color: view[0].toUpperCase() + view.slice(1) === "Album" ? "#4CE0D2" : "white" }}>Album</h1>
                <h1 onClick={(e) => setView(e.target.innerHTML)} style={{color: view[0].toUpperCase() + view.slice(1) === "Artist" ? "#4CE0D2" : "white" }}>Artist</h1>
                <h1 onClick={(e) => setView(e.target.innerHTML)} style={{color: view[0].toUpperCase() + view.slice(1) === "Song" ? "#4CE0D2" : "white" }}>Song</h1>
            </div>
            <div className="Add__content">
                {view[0].toUpperCase() + view.slice(1) === "Song" ? <SongAddForm /> : view[0].toUpperCase() + view.slice(1) === "Album" ? <AlbumAddForm /> : <ArtistAddForm />}
            </div>
        </div>
    )
}