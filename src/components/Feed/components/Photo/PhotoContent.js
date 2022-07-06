import React from 'react';
import { Link } from 'react-router-dom';

/* Components & Assets */
import PhotoComments from './PhotoComments';

import styles from './style.module.css';

function PhotoContent({ data }) {
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img
          src={photo.src}
          alt={photo.title}
        />
      </div>
      <div className={styles.details}>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.visualizations}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  )
}

export default PhotoContent;