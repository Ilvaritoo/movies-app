// import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import axios from 'axios';
import { useEffect, useState } from "react";
import Row from "./components/row/Row";
import{API_KEY, baseURL} from './requests';



const test = `${baseURL}/movie/popular?api_key=${API_KEY}&page=1`;

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
