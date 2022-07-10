import React from 'react';
import { useParams } from 'react-router-dom';

/* Custom Functions */
import useFetch from '../../../../hooks/useFetch';
import { PHOTO_GET } from '../../../../api';

/* Components & Assets */
import Error from '../../../Error';
import Loading from '../../../../helper/Loading';
import PhotoContent from '../../../../components/Feed/components/Photo/PhotoContent';

function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data) return (
    <section className={`container mainContainer`}>
      <PhotoContent data={data} single={true} />
    </section>
  )
  else return null;
}

export default Photo;