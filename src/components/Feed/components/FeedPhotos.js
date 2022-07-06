import React from 'react';

/* Custom functions */
import useFetch from '../../../hooks/useFetch';import { PHOTOS_GET } from '../../../api';

/* Components & Assets */
import FeedPhotosItem from './FeedPhotosItem';
import Error from '../../Error';
import Loading from '../../../helper/Loading';

import styles from '../style.module.css';

function FeedPhotos({ setModalPhoto }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page: 1,
        total: 6,
        user: 0
      });

      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

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