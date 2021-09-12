import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Navbar } from "./components";
import { FreeTrial, Home, Login } from "./pages";

import { BaseStyle } from "./styles/Base.style";

function App() {
  return (
    <div className="App">
      <BaseStyle />

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/free-trial" component={FreeTrial} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
