import './App.css';
import React from 'react';
import Banner from './components/banner/banner';
import About from './components/about/about';
import { ThemeProvider } from './components/theme/ThemeContext';
import Header from './components/header/header';
import Projects from './components/projects/projects';


function App() {
  return (
    <ThemeProvider className="theme">
      <div className="App">
        <Header/>
        <Banner/>
        <About/>
        <Projects/>
      </div>
    </ThemeProvider>
  );
}

export default App;
