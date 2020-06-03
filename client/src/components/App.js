import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Leaderboard from "../pages/leaderboard"
import  Login from "../pages/login"
import  Tutorial from "../pages/tutorial"
import  Play from "../pages/play"
import  MainMenu from "../pages/mainMenu"
import  Bank from '../components/Bank' 
import '../css/App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route exact path="/play" component={Play} />
          <Route exact path="/bank" component={Bank} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/leaderboard" component={Leaderboard} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
