import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="App-main">
        <ItemListContainer/>
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
