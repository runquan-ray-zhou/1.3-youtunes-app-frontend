import { useEffect, useState } from "react"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./ArtistDetails.css"
import Song from './Song'

const API = import.meta.env.VITE_API_URL


export default function ArtistDetails() {
    
    const [ artist, setArtist ] = useState({})
    const [ artistSongs, setArtistSongs ] = useState([])
    
    const { artist_id } = useParams()
    
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`${API}/artists/${artist_id}/songs`)
        .then((response) => response.json())
        .then((responseJSON) => {
            setArtist(responseJSON)
            setArtistSongs(responseJSON.listOfSongs)
        }
        )
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
    }, [artist_id, navigate])

    function handleDelete() {
        fetch(`${API}/artists/${artist_id}`, {
            method: "DELETE",
        })
        .then(() => navigate('/home'))
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
    }

    return (
        <div className="ArtistDetails">
                <div className="artist__img">
                    <span>
                        <img src={artist.img_url} alt={artist.name} />
                    </span>
                </div>
                <div className="artist__details">
                        <p className="artist__name">{artist.name}</p>
                        <p className="artist__main_genre">{artist.main_genre}</p>
                </div>
                <div className="artist_songs">
                    {artistSongs.map((song) => {
                    return <Song
                    key={song.id}
                    song={song}
                />
                })}
                </div>
                <div className="artist__buttons">
                <i className="fa-solid fa-circle-arrow-left" onClick={() => navigate(`/home`)}></i>
                <i className="fa-solid fa-gear" onClick={() => navigate(`/artist/${artist_id}songs/${id}/edit`)}></i>
                <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
        </div>
    )
}