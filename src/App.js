import React from 'react';
import {NavigationBar} from './components/Navigation'
import { Background } from './components/Jumbo'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(fab, faCheckSquare, faCoffee);
function App() {
  return (
    <>
      <NavigationBar />
      <Background />
    </>
  );
}

export default App;
