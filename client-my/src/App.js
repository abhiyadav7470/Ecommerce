import {React} from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Header from './components/nav/Header';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
    </Routes>
    
    </>
  );
}

export default App;
