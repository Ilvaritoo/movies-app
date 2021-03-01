import Header from "./components/header/Header";
import { Switch, Route } from 'react-router-dom';
import Title from "./components/title/Title";
import axios from 'axios';
import { useEffect, useState } from "react";
import Row from "./components/row/Row";
import { test } from './links';
import Page404 from "./components/page404.js/Page404";
import { Context } from './Context';


function App() {
  //eslint-disable-next-line
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios.get(test)
      .then(res => setstate(res.data.results))
      .catch(error => console.log(error))
  }, []);

  // console.log(state);


  return (
    <Context>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Title test={test} />
            <Row test ={test} />
          </Route>
          <Route exact path='/details'>
            <h2>Hello details</h2>
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Context>

  );
}

export default App;
