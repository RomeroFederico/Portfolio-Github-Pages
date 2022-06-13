import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { cv } from '../../configuration/links';

import s from './AboutMe.module.css';

export default function AboutMe({ title, subTitle, description }) {

  const myRef = React.useRef(null);
  const { section } = useSelector(state => state);

  const executeScroll = () => myRef.current.scrollIntoView();

  React.useEffect(() => {
    if (section === 'About') {
      executeScroll();
    }
  }, [section]);

  return (
    <div className = {`${s.globalContainer} center`} ref = {myRef}>
      <div className = {s.textContainer}>
        <h1 className = {`${s.text} ${s.title}`}>{title}</h1>
        <h2 className = {`${s.text} ${s.subTitle}`}>{subTitle}</h2>
        {
          description && description.map((desc, index) => 
            <div className = {`${s.text} ${s.description}`} key = {`description-${index}`}>{desc}</div>
          )
        }
        <Link to = {`/files/${cv}`} target = "_blank" download>
          <button className = {s.btn}>Descargar CV</button>
        </Link>
      </div>
    </div>
  );
}