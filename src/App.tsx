import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Navbar } from './components';
import { Home, Login } from './pages';

import { BaseStyle } from './styles/Base.style';

function App() {
  return (
    <div className="App">
      <BaseStyle />
      <Navbar />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
