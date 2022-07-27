import React from 'react';
import { useSelector } from 'react-redux';
import Cursor from '../SVG/Cursor';

import s from './InfoStack.module.css';

export default function InfoStack() {

  const { stack, color } = useSelector(state => state);

  if (!stack || color.length === 0) return (
    <div className = {s.infoStackContainerNoStack}>
      <div className = {s.cursorContainer}>
        <Cursor />
      </div>
      <h3 className = {s.info}>Mueve el cursor sobre cualquier icono para ver mas detalles</h3>
    </div>
  );

  return (
    <div className = {s.infoStackContainer} style = {{ ['--exampleVar'] : color }}>
      <img className = {s.icon} alt = {"icon"} src = {stack.icon} />
      <h2 className = {s.title}>{stack.name}</h2>
      <span className = {s.description}>{stack.description}<i className = {s.source}>{` Fuente: ${stack.source}`}</i></span>
      <a href = {stack.viewMore} className = {s.viewMore} target = {"_blank"} rel = {"noreferrer"}>- Ver Mas -</a>
      <a href = {stack.link} className = {s.viewMore} target = {"_blank"} rel = {"noreferrer"}>- Link Oficial -</a>
    </div>
  );
}