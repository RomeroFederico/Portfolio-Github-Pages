import React from 'react';

import s from './AnimateText.module.css';

export default function AnimateText({ staticText, preAnimatedText, textToAnimate }) {

  let [ index, setIndex ] = React.useState({
    wordIndex: 0,
    letterIndex: 0,
    length: textToAnimate[0].length,
    wordCount: textToAnimate.length,
    reverse: false,
    pause: false
  });
  let [ text, setText ] = React.useState('');

  React.useEffect(() => {
    
    const interval = setInterval(() => { 
      setText((text) => textToAnimate[index.wordIndex].slice(0, index.letterIndex) );
      setIndex((index) => generateNewIndex(index));
    }, index.pause ? 1000 : (index.reverse ? 25 : 80));

    return () => clearInterval(interval);    
  });

  let generateNewIndex = function(index) {

    let newIndex = { ...index }

    if (!newIndex.reverse) {
      if (newIndex.letterIndex === newIndex.length)
        newIndex = {
          ...newIndex,
          reverse: true,
          pause: true
        }
      else 
        newIndex = {
          ...newIndex,
          letterIndex: newIndex.letterIndex + 1,
        }
    }
    else {
      if (newIndex.letterIndex === 0) {
        if (newIndex.wordIndex === newIndex.wordCount - 1) newIndex = {
          ...newIndex,
          wordIndex: 0,
          letterIndex: 0,
          length: textToAnimate[0].length,
          reverse: false
        }
        else newIndex = {
          ...newIndex,
          wordIndex: newIndex.wordIndex + 1,
          letterIndex: 0,
          length: textToAnimate[newIndex.wordIndex + 1].length,
          reverse: false
        }
      }
      else newIndex = {
        ...newIndex,
        pause: false,
        letterIndex: newIndex.letterIndex - 1
      }
    }

    return newIndex;
  }

  return (
    <>
      <span className = {s.spanStaticText}>{staticText}</span>
      <span className = {s.spanStaticText}>{preAnimatedText}<i className = {s.spanAnimatedText}>{text}</i></span>
    </>
  );
}