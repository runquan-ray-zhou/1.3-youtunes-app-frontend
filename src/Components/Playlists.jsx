import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Playlist from './Playlist.jsx'
import "./Playlists.css"

// const API = import.meta.env.VITE_API_URL

export default function Playlists() {

    let navigate = useNavigate()

    const [ playlists, setPlaylists ] = useState([])
    
    // useEffect(() =>{
    //     fetch(`${API}/playlists`)
    //     .then((response) => response.json())
    //     .then((responseJSON) => setPlaylists(responseJSON))
    //     .catch((error) => {
    //         navigate("/notfound")
    //         console.error(error)
    //     })
    // }, [])

    return (
        <div className="Playlists">
            <h1>Youtunes Playlists</h1>
            {/* {playlists.map((playlist) => {
                return <Playlist
                key={playlist.id}
                playlist={playlist}
                />
            })} */}
        </div>
    )
}