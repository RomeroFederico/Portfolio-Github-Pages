import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSection } from '../../redux/actions';

import s from './Tabs.module.css';

export default function Tabs() {

  const dispatch = useDispatch();

  let handleClick = function(sectionTab) {
    dispatch(changeSection(sectionTab))
  }

  return (
    <div className = {`${s.globalContainer} center`}>
      <div className = {`${s.tabsContainer} center`}>

        <div 
          className = {`${s.tabContainer} center ${s.enabled}`}
          onClick = {() => handleClick('Inicio')}
        >
          <div className = {s.tab}>
            Inicio
          </div>
        </div>

        <div 
          className = {`${s.tabContainer} center ${s.enabled}`}
          onClick = {() => handleClick('About')}
        >
          <div className = {s.tab}>
            About Me
          </div>
        </div>

        <div 
          className = {`${s.tabContainer} center ${s.enabled}`}
          onClick = {() => handleClick('Projects')}
        >
          <div className = {s.tab}>
            Projects
          </div>
        </div>

      </div>
    </div>
  );
}