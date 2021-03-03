import Header from "./components/header/Header";
import Title from "./components/title/Title";
import axios from 'axios';
import { useEffect, useState } from "react";
import Row from "./components/row/Row";
import { popularMovies } from './links';
import { Context } from './Context';
import Popular from "./components/popularMovie/Popular";


function App() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios.get(popularMovies)
      .then(res => setstate(res.data.results))
      .catch(error => console.log(error))
  }, []);
  // console.log(state);

  return (
    <Context>
      <div className="app">
        <Header />
        <Title popular={popularMovies} />
        <Popular popular={state}/>
        <Row  />
      </div>
    </Context>

  );
}

export default App;
