import React from 'react';
import { useParams } from 'react-router-dom';

/* Component & Assets */
import Feed from '../../../components/Feed';
import Head from '../../../helper/Head';

function UserProfile() {
  const { user } = useParams();

  return (
    <section className='container mainSection'>
      <Head
        title={user}
        description="Home do site Dogs, com o feed de fotos."
      />
      <h1 className='title'>{user}</h1>
      <Feed user={user} />
    </section>
  )
}

export default UserProfile;