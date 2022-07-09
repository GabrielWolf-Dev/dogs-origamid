import React from 'react';

/* Components & Assets */
import Image from '../../../helper/Image';

import styles from '../style.module.css';

function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image
        src={photo.src} 
        alt={photo.title}
      />
      <span className={styles.visualization}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem;