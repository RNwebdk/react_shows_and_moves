import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Favorite from './components/pages/Favorite';
import ShowContextProvider from './contexts/ShowContext';

function App() {
  return (
    <Router>
      <div className='App'>
        <ShowContextProvider>
          <div className='container'>
            <NavBar />
            <div id='content'>
              <Switch>
                <Route path='/favorite'>
                  <Favorite />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </ShowContextProvider>
      </div>
    </Router>
  );
}

export default App;
