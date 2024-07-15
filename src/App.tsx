
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart/:id' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
