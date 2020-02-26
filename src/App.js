import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import './style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import List from './components/List';
import Create from './components/Create';
import Edit from './components/Edit';
import Unicorns from './components/Unicorns';



function App() {
  return (
    <Router>

      <Navbar />

      <div className="mui-container">

        <Route path="/" exact component={Unicorns} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
      </div>
    </Router>
  );
}

export default App;
