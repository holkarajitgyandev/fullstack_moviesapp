import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Netflix from "./pages/Netflix";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MoviePage from "./pages/Movies";
import Player from "./pages/Player";
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";


function App() {
  return (
    
   
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Netflix/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/movies" element={<MoviePage/>}/>
      <Route exact path="/player" element={<Player/>}/>
      <Route exact path="/tvshows" element={<TVShows/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/bookmarkedmovies" element={<UserListedMovies/>}/>
      
      </Routes>
      </BrowserRouter>
      
  )
}

export default App;
