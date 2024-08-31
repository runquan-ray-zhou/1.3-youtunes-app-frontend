import { useEffect, useState } from "react"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./AlbumDetails.css"
import Song from './Song'

const API = import.meta.env.VITE_API_URL


export default function AlbumDetails() {
    
    const [ album, setAlbum ] = useState({})
    const [ albumSongs, setAlbumSongs ] = useState([])
    
    const { album_id } = useParams()
    
    let navigate = useNavigate()

    useEffect(() => {
        fetch(`${API}/albums/${album_id}/songs`)
        .then((response) => response.json())
        .then((responseJSON) => {
            setAlbum(responseJSON)
            setAlbumSongs(responseJSON.songs)
        }
        )
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
    }, [album_id, navigate])

    function handleDelete() {
        fetch(`${API}/albums/${album_id}`, {
            method: "DELETE",
        })
        .then(() => navigate('/home'))
        .catch(() => {
            navigate("/notfound")
            console.error(error)
        })
    }

    return (
        <div className="AlbumDetails">
                <div className="album__img">
                    <span>
                        <img src={album.album_img_url} alt={album.album_name} />
                    </span>
                </div>
                <div className="album__details">
                        <p className="album__name">{album.album_name}</p>
                        <p className="album__artist">{album.album_artist}</p>
                </div>
                <div className="album_songs">
                    {albumSongs.map((song) => {
                    return <Song
                    key={song.id}
                    song={song}
                />
                })}
                </div>
                <div className="album__buttons">
                    <i className="fa-solid fa-circle-arrow-left" onClick={() => navigate(`/home`)}></i>
                    <i className="fa-solid fa-gear" onClick={() => navigate(`/album/${album_id}songs/${id}/edit`)}></i>
                    <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
                </div>
        </div>
    )
}