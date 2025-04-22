import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Contact from './screens/Contact';
import About from './screens/About';
import Register from './screens/Register';
import NavBar from './components/NavBar';
import logo from './Sadia - Cachorro Quente.png';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar />
        </header>
        <main className="App-main">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}
 
export default App;