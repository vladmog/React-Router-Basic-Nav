import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path = "/" />
    <Route path = "/about" />
    <Route path = "/contact" />
    
  </div>
);

export default App;


//* Create 3 `<Route />` setting their `path` prop equal to `/`, `/about`, `/contact` with their respective components.