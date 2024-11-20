import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import { ShopContext } from './Context/ShopContext';
import ArtisanServices from './Pages/ArtisanServices';
import Login from './Pages/Login'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './ToastifyStyles.css';
import { useContext, useState } from 'react';
import ShopCategory from './Pages/ShopCategory';


const App=()=> {

  const handleLogin = () => {
    toast.success("Login successful!");
  }

  const {token} = useContext(ShopContext);


  return (
    <div>
    <ToastContainer/>
      <Router>
        <Navbar/>
        <div className='app'>
          {!token ? (
            <Login onLogin={handleLogin}/>
        ) : (
          <div className='shop_category_overlay'>
        <Routes>
          <Route path='/artisan/single/:id' element={<ArtisanServices/>}/>

          <Route path='/' element={<ShopCategory category="men" />}/>
        </Routes>
          </div>
        )}
      </div>
      </Router>
    </div>
  );
};

export default App;
