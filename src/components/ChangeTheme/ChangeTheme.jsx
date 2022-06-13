import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/actions';
import Sun from '../SVG/Sun/Sun';
import Moon from '../SVG/Moon/Moon';

import s from './ChangeTheme.module.css';

export default function ChangeTheme() {

  const dispatch = useDispatch();
  const { theme } = useSelector(state => state);

  let handleChangeTheme = function() {
    dispatch(changeTheme());
  }

  return (
    <div className = {s.menuContainer}>
      <div className = {s.btn} onClick = {handleChangeTheme}>
      {
        theme === 'LIGHT' && 
        <div className = {s.showIcon}>
          <Sun />
        </div>
      }
      {
        theme === 'DARK' && 
        <div className = {s.showIcon}>
          <Moon />
        </div>
      }
      </div>
    </div>
  )
}