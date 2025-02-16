// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Result from './pages/Home/Result';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/results' element={<Result />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
