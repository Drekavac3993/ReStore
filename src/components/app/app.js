import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from "../pages";
import ShopHeader from '../shop-header';
import './app.css';

const App = () => {
  return(
      <main role="main" className="container">
          <ShopHeader />
          <Switch>
            <Route path='/' component={ HomePage } exact />
          </Switch>
      </main>
  )
};

export default App;
