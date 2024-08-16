import ArtistDetails from "../Components/ArtistDetails";
import SongDetails from "../Components/SongDetails";
import AlbumDetails from "../Components/AlbumDetails";

import { useParams } from "react-router-dom";

export default function Show() {
    const { id, album_id } = useParams()
    return (
        <div className="Show">
            {album_id && id ? <SongDetails /> : album_id ? <AlbumDetails /> : <ArtistDetails /> }
        </div>
    )
}