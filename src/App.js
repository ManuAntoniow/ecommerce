import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import Carrusel from './components/Carousel/Carousel'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="App-main">
        <Carrusel/>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
