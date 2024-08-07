import ArtistDetails from "../Components/ArtistDetails";
import SongDetails from "../Components/SongDetails";
import { useParams } from "react-router-dom";

export default function Show() {
    const { id } = useParams()
    return (
        <div className="Show">
            {id ? <SongDetails /> : <ArtistDetails /> }
        </div>
    )
}