import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import Carrusel from './components/Carousel/Carousel'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="App-main">
        <Carrusel/>
        <ItemListContainer/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
