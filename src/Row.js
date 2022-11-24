import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  console.log(axios);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // https://api.themoviesdb.org/3/discover/tv?api_kEY=${API_kEY}&with_networks=213
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(movies);
  console.log(movies);
  return (
    <div className="row">
      <h2 className="heading">{title}</h2>
<div className="row col-poster">
        {/* <div> */}
      {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`}
            alt={movie.name}
          />
          ))}
        </div>
        <h1>Manish Netflix Clone</h1>
    </div>
  );
}
export default Row;
