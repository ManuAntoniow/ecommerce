import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
