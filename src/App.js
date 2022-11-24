// import logo from './logo.svg';
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      {/* <h1> Hey,this is manish i want to build the Netflix clone app</h1> */}
      <Banner/>
      <Row
        className="netflix-org"
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
         islargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="comdey Movies" fetchUrl={requests.fetchComdeyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
