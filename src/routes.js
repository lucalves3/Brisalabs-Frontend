import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { render } from "react-dom";
import AllPokes from './pages/allPokes';
import Home from './pages/home';
import Login from './pages/login';

render (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/see-all' element={<AllPokes />} />
    </Routes>
  </BrowserRouter>
  )
