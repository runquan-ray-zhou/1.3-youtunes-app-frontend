import Albums from "../Components/Albums";
import Artists from "../Components/Artists";
import Playlists from "../Components/Playlists";
import "./Home.css"

export default function Home() {
    return (
        <div className="Home">
            <h1>Albums
            <Albums />
            </h1>
            <h1>Artists
            <Artists />
            </h1>
            <h1>Playlists
            <Playlists />
            </h1>
        </div>
    )
}