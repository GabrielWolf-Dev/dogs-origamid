import React from 'react';

/* Custom functions */
import useFetch from '../../../hooks/useFetch';import { PHOTOS_GET } from '../../../api';

/* Components & Assets */
import FeedPhotosItem from './FeedPhotosItem';
import Error from '../../Error';
import Loading from '../../../helper/Loading';

import styles from '../style.module.css';

function FeedPhotos({ 
  user, 
  page = 1, 
  setInfinite,
  setModalPhoto 
}) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({
        page,
        total,
        user
      });

      const { response, json } = await request(url, options);

      if(response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [user, page, request, setInfinite]);

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map(photo => 
            <FeedPhotosItem 
              key={photo.id} 
              photo={photo} 
              setModalPhoto={setModalPhoto} 
            />
          )}
        </ul>
      </div>
    );
  else return null;
}

export default FeedPhotos;