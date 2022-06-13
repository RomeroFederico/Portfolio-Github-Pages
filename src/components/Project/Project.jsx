import React from 'react';

import s from './Project.module.css';

export default function Project({ images, title, details, features, icons, linkToSite, linkToRepository }) {

  const [ showImage, setShowImage ] = React.useState(0);
  const [ isOnHover, setisOnHover ] = React.useState(false);

   React.useEffect(() => {

    let interval;
    if (isOnHover) interval = setInterval(() => 
      setShowImage(showImage === images.length - 1 ? 0 : showImage + 1)
      , 1500);
    else clearInterval(interval);

    return () => clearInterval(interval);    
  });

  let handleChangeImage = function() {
    setisOnHover(true);
  }

  let handleStopChangeImage = function() {
    setisOnHover(false);
    setShowImage(0);
  }

  return (
    <div className = {s.projectContainer}>

      <div className = {`${s.help} center`}>Ver mas Imagenes</div>

      <div className = {s.imageContainer} onMouseEnter = {handleChangeImage} onMouseLeave = {handleStopChangeImage}>
      {
        images && images.map((image, index ) =>

          <img 
            src = {image}
            alt = {`project-${index}`}
            className = {`${s.image} ${showImage === index ? s.showImage : ''}`}
            key = {`image-${index}`}
          />

        )
      }
      </div>

      <div className = {s.detailsContainer}>
        <h1 className = {`${s.text} ${s.title}`}>{title}</h1>
        <span className = {`${s.text} ${s.details}`}>{details}</span>
        <span className = {`${s.text}`}>Caracteristicas:</span>
        <ul className = {s.features}>
        {
          features && features.map((feature, index) => 

            <li className = {s.feature} key = {`li-feauture-${index}`}>{feature}</li>

          )
        }
        </ul>
        <div className = {s.bottomZone}>
          <div className = {s.buttonZone}>
            <a href = {linkToSite} className = {s.btn} target = {"_blank"} rel = {"noreferrer"}>Ir al Sitio</a>
            <a href = {linkToRepository} className = {s.btn} target = {"_blank"} rel = {"noreferrer"}>Repositorio</a>
          </div>
          <div className = {s.icons}>
          {
            icons && icons.map((icon, index) =>

              <div className = {s.iconContainer} key = {`icon-container-${index}`}>
                <div className = {s.tag} key = {`icon-tag-${index}`}>{icon.name}</div>
                <img className = {s.icon} alt = {"icon"} src = {icon.ico} key = {`icon-${index}`} />
              </div>

            )
          }
          </div>
        </div>
      </div>
    </div>
  );
}