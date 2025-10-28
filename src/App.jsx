import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Add from "./Pages/Add";
import Show from "./Pages/Show";
import About from "./Pages/About";
import Login from "./Pages/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:type" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/allsongs" element={<Index />} />
            <Route path="/add/:type" element={<Add />} />
            <Route path="/add" element={<Add />} />
            <Route path="/artists/:artist_id" element={<Show />} />
            <Route path="/artists/:artist_id/edit" element={<Edit />} />
            <Route path="/artists/:artist_id/albums" element={<Show />} />
            <Route path="/albums/:album_id" element={<Show />} />
            <Route path="/albums/:album_id/songs" element={<Show />} />
            <Route path="/albums/:album_id/songs/:id" element={<Show />} />
            <Route path="/albums/:album_id/songs/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
