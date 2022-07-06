import React from 'react';

/* Custom functions */
import useFetch from '../../../hooks/useFetch';
import { PHOTO_GET } from '../../../api';

/* Components & Assets */
import Error from '../../Error';
import Loading from '../../../helper/Loading';
import PhotoContent from './Photo/PhotoContent';

import styles from '../style.module.css';

function FeedModal({ photo }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal;