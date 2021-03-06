import React from 'react';
import { Route, Routes } from 'react-router-dom';

/* Custom Functions */
import { UserContext } from '../../context/UserContext';

/* Components & Assets */
import UserHeader from './components/UserHeader';
import Feed from '../../components/Feed';
import UserPhotoPost from './components/UserPhotoPost';
import UserStats from './components/UserStats';
import NotFound from '../NotFound';
import Head from '../../helper/Head';

function User() {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head
        title="Minha conta"
        description="Home do site Dogs, com o feed de fotos."
      />
        <UserHeader />

        <Routes>
          <Route path="/" element={<Feed user={data.id} />} />
          <Route path="/postar" element={<UserPhotoPost />} />
          <Route path="/estatisticas" element={<UserStats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </section>
  )
}

export default User;