import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import HeaderWhite from './components/HeaderWhite/HeaderWhite';
import Login from './components/Login/Login';
import Hotel from './components/Hotel/Hotel';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App(props) {
  
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login"> 
            <HeaderWhite />
            <Login />
          </Route>
          <PrivateRoute path="/:key/hotels"> 
            <HeaderWhite/>
            <Hotel/>
          </PrivateRoute>
          <Route exact path="/"> 
            <Home></Home>
          </Route>
          <Route path="/:key">
            <CategoryDetails/>
          </Route>
          <Route path="*"> 
            {/* <NotFound /> */}
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
