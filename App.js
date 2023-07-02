import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Kart from './pages/Kart';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Gallery from './pages/Gallery';
import Event from './pages/Event';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/kart' component={Kart} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/event' component={Event} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      <Footer />
      </Router>
      
    </>
  );
}

export default App;
