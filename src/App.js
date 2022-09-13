import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nosotros from './components/Nosotros/Nosotros';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <main className="App-main">
          <Routes>
            <Route path='/ecommerce' element={<Home/>}/>
            <Route path='/ecommerce/Nosotros' element={<Nosotros/>}/>
            <Route path='/ecommerce/Productos' element={<ItemListContainer/>}/>
            <Route path='/ecommerce/Productos/:themeId' element={<ItemListContainer/>}/>
            <Route path='/ecommerce/item/:productId' element={<ItemDetailContainer/>}/>
          </Routes>
        </main>
        <Footer/> 
      </div>
    </BrowserRouter>
  );
}

export default App;
