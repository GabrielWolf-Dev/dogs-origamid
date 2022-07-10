import React from 'react';

/* Custom Functions */
import useFetch from '../../..//hooks/useFetch';
import { GET_STATS } from '../../../api';

/* Components & Assets */
import Head from '../../../helper/Head';
import Loading from '../../../helper/Loading';
import Error from '../../../components/Error';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

function UserStats() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem('token');
      const { url, options } = GET_STATS(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if(loading) return <Loading />
  if(error) return <Error error={error} />
  if(data) return (
    <React.Suspense fallback={<Loading />}>
      <Head
        title="Estatísticas"
        description="Home do site Dogs, com o feed de fotos."
      />
      <UserStatsGraphs data={data} />
    </React.Suspense>
  )
  else return null;
}

export default UserStats;