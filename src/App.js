import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Row from "./components/row/Row";
import Popular from "./components/popularMoviesRow/Popular";
import SearchMovie from "./components/searchMovie/SearchMovie";

function App() {
  
  return (
    <div className="app">
      <Header />
      <Title />
      <Popular />
      <Row />

      <SearchMovie />
    </div>
  );
}

export default App;
