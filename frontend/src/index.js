import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import Signup from './landingPage/signUp/Signup';
import AboutPage from './landingPage/about/AoutPage';
import ProductPage from './landingPage/products/ProductPage';
import PricingPage from './landingPage/pricing/PricingPage';
import SupportPage from './landingPage/support/SupportPage';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import PageNotFound from './landingPage/PageNotFound';
import Login from './landingPage/signUp/Login';
// import Home from '../../dashboard/src/components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
   <Routes>
      <Route path='/' element={< HomePage />} />
      <Route path='/signUp' element={< Signup />} />
      <Route path='/about' element={< AboutPage />} />
      <Route path='/products' element={< ProductPage />} />
      <Route path='/pricing' element={< PricingPage />} />
      <Route path='/support' element={< SupportPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={< PageNotFound />} />
      {/* <Route path='/dashboard/' element={<Home/>} /> */}
    </Routes>
    <Footer/>
  </BrowserRouter>
);
