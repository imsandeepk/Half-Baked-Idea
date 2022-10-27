
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catogery from './components/Catogery';
import Designt from './components/Design';
import Designh from './components/Designh';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Hero/>}>
          <Route path='catogery' element={<Catogery/>}>
            <Route path='hoodies' element={<Designh/>}/>
            <Route path='tshirts' element={<Designt/>}/>
          </Route>
        </Route>
  
    
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
