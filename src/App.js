import Header from "./components/header/Header";
import Title from "./components/title/Title";
// import axios from 'axios';
// import { useEffect, useState } from "react";
import Row from "./components/row/Row";
// import { popularMovies } from './links';


function App() {
  // const [state, setstate] = useState([]);

  // useEffect(() => {
  //   axios.get(popularMovies)
  //     .then(res => setstate(res.data.results))
  //     .catch(error => console.log(error))
  // }, []);

  return (
    <div className="app">
      <Header />
      <Title />
      <Row />
    </div>
  );
}

export default App;
