import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Search from './components/Pages/Search';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AllMovies from './components/Pages/AllMovies';
import TVshow from './components/Pages/TVshow';
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/search' element={<Search />}/>
        <Route exact path='/movies/page/:index' element={<AllMovies/>}/>
        <Route exact path='/tvshow/page/:index' element={<TVshow />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
