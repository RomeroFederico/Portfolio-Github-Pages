import React from 'react';
import Stack from '../Stack/Stack';

import s from './StacksByCategory.module.css';

export default function StacksByCategory({ stacksByCategory }) {
  return (
    <div className = {s.stacksByCategoryContainer}>
    {
      stacksByCategory && stacksByCategory.length > 0 && stacksByCategory.map((stack, index) => 

        <Stack stack = {stack} key = {`stack-${stack.category}-${index}`}/>

      )
    }
    </div>
  );
}