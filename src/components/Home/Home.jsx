import React from 'react';
import { useSelector } from 'react-redux';
import AnimateText from '../AnimateText/AnimateText';

import s from './Home.module.css';

export default function Home({ staticText, preAnimatedText, textToAnimate }) {

  const myRef = React.useRef(null);
  const { section } = useSelector(state => state);
  const executeScroll = () => myRef.current.scrollIntoView();

  React.useEffect(() => {
    if (section === 'Inicio') executeScroll();
  }, [section]);

  return (
    <div className = {`${s.globalContainer} center`} ref = {myRef}>
      <AnimateText staticText = {staticText} preAnimatedText = {preAnimatedText} textToAnimate = {textToAnimate}/>
    </div>
  )
}