import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import MenuList from './components/MenuList';
function App() {
  return (
      <BrowserRouter>
        
        <div className="App">
          <Navbar/>
          <Routes>  
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/:menuList' element={<MenuList />}/>
          </Routes>

          </div> 
        
      </BrowserRouter>
  );
}

export default App;
