

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import {ToastContainer} from 'react-toastify';
import './App.css';

function App() {
  return (
    <div className=''>
      <ToastContainer></ToastContainer>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     
     </BrowserRouter>
  </div>
  );
}

export default App;
