import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import HeaderWhite from './components/HeaderWhite/HeaderWhite';
import Login from './components/Login/Login';
import Hotel from './components/Hotel/Hotel';

// export const CategoryContext = createContext();

function App() {
  
  // const [category, setCategory] = useState({});
  return (
    // <CategoryContext.Provider value={[]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/"> 
            <Home></Home>
          </Route>
          <Route path="/details">
            <CategoryDetails/>
          </Route>
          <Route path="/login"> 
            <HeaderWhite />
            <Login />
          </Route>
          <Route path="/hotels"> 
            <HeaderWhite/>
            <Hotel/>
          </Route>
        </Switch>
      </Router>
    // </CategoryContext.Provider>
  );
}

export default App;
