import React from 'react';
import { useSelector } from 'react-redux';
import Project from '../Project/Project';

import s from './Projects.module.css';

export default function Projects({ projects }) {

  const myRef = React.useRef(null);
  const { section } = useSelector(state => state);
  const executeScroll = () => myRef.current.scrollIntoView();

  React.useEffect(() => {
    if (section === 'Projects') executeScroll();
  }, [section]);

  return (
    <div className = {`${s.globalContainer} ${projects && projects.length > 1 ? s.addPading : ''}`} ref = {myRef}>
    {
      projects && projects.map((project, index) => 
        <Project
          images = {project.images} 
          title = {project.title}
          details = {project.details}
          features = {project.features}
          icons = {project.icons}
          linkToSite = {project.linkToSite}
          linkToRepository = {project.linkToRepository}
          key = {`project-${project.title}-${index}`}
        />
      )
    }
    </div>
  );
}