import React from 'react';
import { useSelector } from 'react-redux';
import StacksByCategory from '../StacksByCategory/StacksByCategory';
import InfoStack from '../InfoStack/InfoStack';
import s from './Stacks.module.css';

export default function Stacks({ stacks }) {

  const myRef = React.useRef(null);
  const { section } = useSelector(state => state);

  const executeScroll = () => myRef.current.scrollIntoView();

  React.useEffect(() => {
    if (section === 'Skills') {
      executeScroll();
    }
  }, [section]);

  return (
    <div className = {s.globalContainer} ref = {myRef}>
      <InfoStack />
      <h1 className = {`${s.text} ${s.title}`}>Tecnologias que Manejo</h1>
      <StacksByCategory stacksByCategory = {stacks} />
    </div>
  );
}