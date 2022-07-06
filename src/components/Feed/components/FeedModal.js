import React from 'react';

/* Custom functions */
import useFetch from '../../../hooks/useFetch';
import { PHOTO_GET } from '../../../api';

/* Components & Assets */
import Error from '../../Error';
import Loading from '../../../helper/Loading';
import PhotoContent from './Photo/PhotoContent';

import styles from '../style.module.css';

function FeedModal({ photo,  setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal;