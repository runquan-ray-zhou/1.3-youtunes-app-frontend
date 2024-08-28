import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Song from './Song'
import "./Songs.css"

const API = import.meta.env.VITE_API_URL

export default function Songs() {

    let navigate = useNavigate()

    const [ songs, setSongs ] = useState([])
    
    useEffect(() =>{
        fetch(`${API}/allsongs`)
        .then((response) => response.json())
        .then((responseJSON) => setSongs(responseJSON))
        .catch((error) => {
            navigate("/notfound")
            console.error(error)
        })
    }, [])

    return (
        <div className="Songs">
            <div className='Songs__header'>
                <h1>Youtunes Songs</h1>
            </div>
            <div className='Songs__content'>
                {songs.map((song) => {
                    return <Song
                    key={song.id}
                    song={song}
                    />
                })}
            </div>
        </div>
    )
}