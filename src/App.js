import React from 'react';
import {NavigationBar} from './components/Navigation'
import { Background } from './components/Jumbo'
import { Skills } from './components/Skills'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { About } from './components/About'
import { Projects } from './components/Projects'
import './App.css';

library.add(fab, faCheckSquare, faCoffee);
class App extends React.Component {
  render() {
    return (
		<>
			<NavigationBar />
			<Background />
			<About />
      <Skills />
      <Projects />
		</>
	);
}
}

export default App;
