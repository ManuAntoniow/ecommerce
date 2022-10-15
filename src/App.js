import './App.css'

//Componentes
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Nosotros from './components/Nosotros/Nosotros'
import Cart from './components/Cart/Cart'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ItemList from './components/ItemList/ItemList'

//Helpers
import {CartProvider} from "./context/CartContext"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <main className="App-main">
            <Routes>
              <Route path='/ecommerce' element={<Home/>}/>
              <Route path='/ecommerce/Nosotros' element={<Nosotros/>}/>
              <Route path='/ecommerce/Productos' element={<ItemList/>}/>
              <Route path='/ecommerce/Productos/:themeId' element={<ItemList/>}/>
              <Route path='/ecommerce/item/:productId' element={<ItemDetail/>}/>
              <Route path='/ecommerce/Cart' element={<Cart/>}/>
            </Routes>
          </main>
          <Footer/> 
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
