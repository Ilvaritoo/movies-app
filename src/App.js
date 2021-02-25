// import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import axios from 'axios';
import { useEffect, useState } from "react";
import Row from "./components/row/Row";

const API_KEY = '864d74a3a6d66b76c9fc89a4df3871e6';
// const baseURL = 'https://api.themoviedb.org/3';

// const movies_API = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
// const moviesImages = `https://image.tmdb.org/t/p/w500`;
// const searchQuery = `https://api.themoviedb.org/3/movie/343611?api_key=${API_KEY}`;

const test = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;

function App() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios.get(test)
      .then(res => setstate(res.data.results))
      .catch(error => console.log(error))
  }, []);

  console.log(state);


  return (
    <div className="app">
      <Header />
      {/* <Filter /> */}
      <Title test={test}/>
      <Row test={test}/>
    </div>
  );
}

export default App;
