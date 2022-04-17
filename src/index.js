import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from './context/context';
import Login from './pages/login';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Search from './pages/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/favorites' element={<Favorites />} />
        <Route exact path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
