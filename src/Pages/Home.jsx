import Albums from "../Components/Albums";
import Artists from "../Components/Artists";
import Playlists from "../Components/Playlists";
import "./Home.css"

export default function Home() {
    return (
        <div className="Home">
            <Albums />
            <Artists />
            <Playlists />
        </div>
    )
}