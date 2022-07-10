import React from 'react';

/* Components & Assets */
import Head from '../../helper/Head';
import Feed from '../../components/Feed';

function Home() {
  return (
    <section className='container mainContainer'>
      <Head 
        title="Fotos" 
        description="Home do site Dogs, com o feed de fotos." 
      />
      <Feed />
    </section>
  )
}

export default Home;