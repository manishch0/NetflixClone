import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";

const Banner = (title) => {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPoition: "center center",
      }}
    >
      <div className="bannner__contents">
        <h1>{movie?.title || movie?.original_name}</h1>
        <div>
          <button className="banner__buttton">Play</button>
          <button className="banner__buttton">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
    </header>
  );
};
export default Banner;
