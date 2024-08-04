import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Album from './Artist.jsx'
import "./Albums.css"

// const API = import.meta.env.VITE_API_URL

export default function Albums() {

    let navigate = useNavigate()

    const [ albums, setAlbums ] = useState([])
    
    // useEffect(() =>{
    //     fetch(`${API}/albums`)
    //     .then((response) => response.json())
    //     .then((responseJSON) => setAlbums(responseJSON))
    //     .catch((error) => {
    //         navigate("/notfound")
    //         console.error(error)
    //     })
    // }, [])

    return (
        <div className="Albums">
            <h1>This is a list of Albums</h1>
            {/* {artists.map((albums) => {
                return <Album
                key={album.id}
                album={album}
                />
            })} */}
        </div>
    )
}