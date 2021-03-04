import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Row from "./components/row/Row";
import Popular from "./components/popularMoviesRow/Popular";

function App() {
  
  return (
    <div className="app">
      <Header />
      <Title />
      <Popular />
      <Row />
    </div>
  );
}

export default App;
