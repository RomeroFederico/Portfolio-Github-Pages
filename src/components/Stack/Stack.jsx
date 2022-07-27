import React from 'react';
import { useDispatch } from 'react-redux';
import { changeStack } from '../../redux/actions';

import s from './Stack.module.css';

export default function Stack({ stack }) {

  const dispatch = useDispatch();

  let handleHover = function(index) {
    dispatch(changeStack(stack.items[index], stack.color));
  }

  return (
    <div className = {s.globalContainer}>
      <div className = {s.title} style = {{ backgroundColor: stack.color }}>{stack.category}</div>
      <div className = {s.stackContainer}>
      {
        stack.items && stack.items.length > 0 && stack.items.map((item, index) => 

          <img 
            className = {s.icon}
            alt = {"icon"}
            src = {item.icon}
            key = {`icon-${index}`}
            onMouseEnter = {() => handleHover(index)}
          />

        )
      }
      </div>
    </div>
  );
}