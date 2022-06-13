import React from 'react';
import { useSelector } from 'react-redux';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Links from './components/Links/Links';
import Tabs from './components/Tabs/Tabs';
import ChangeTheme from './components/ChangeTheme/ChangeTheme';

import { myInfo } from './configuration/aboutMe.js';
import { projectList } from './configuration/projects.js';
import { presentation } from './configuration/home.js';

import './App.css';

function App() {

  let theme = useSelector(state => state.theme);

  return (
    <div className = {`global-variables ${theme} body`}>
    
      <Home 
        staticText = {presentation.staticText}
        preAnimatedText = {presentation.preAnimatedText}
        textToAnimate = {presentation.textToAnimate}
      />
      
      <AboutMe
        title = {myInfo.title}
        subTitle = {myInfo.subTitle}
        description = {myInfo.description}
      />
      
      <Projects 
        projects = {projectList}
      />
      
      <Links />
      <Tabs />
      <ChangeTheme />
    </div>
  );
}

export default App;
