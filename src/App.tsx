import React from 'react';

import { Navbar } from './components';
import { Home } from './pages';

import { BaseStyle } from './styles/Base.style';

function App() {
  return (
    <div className="App">
      <BaseStyle />

      <Navbar />
      <Home />
    </div>
  );
}

export default App;
