import React from "react";
import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { setSelectedMovie } from "../store";

 function Player() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.netflix.selectedMovie);
  const movies = useSelector((state) => state.netflix.movies);

  useEffect(() => {
    if (!selectedMovie || selectedMovie.id !== parseInt(movieId, 10)) {
      const movie = movies.find((movie) => movie.id === parseInt(movieId, 10));
      if (movie) {
        dispatch(setSelectedMovie(movie));
      }
    }
  }, [movieId, selectedMovie, movies, dispatch]);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }
 

  
  
 

  return (
    <Container>
      <div className="back">
          <BsArrowLeft style={{width:"50px",height:"30px",color:"red"}} onClick={() => navigate(-1)} />
        </div>
      <div className="player">
        
        {/* <video src={video} autoPlay loop controls muted /> */}
        <h3>{selectedMovie.id}</h3>
        <h1>{selectedMovie.name}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.image}`} alt={selectedMovie.name} />
      <p>Genres: {selectedMovie.genres.join(', ')}</p>
        

       
        
      </div>
    </Container>
  );
}
export default Player;

const Container = styled.div`
  .player {
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    
  }
`;