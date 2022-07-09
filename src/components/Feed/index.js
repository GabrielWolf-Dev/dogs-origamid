import React from 'react';

/* Components & Assets */
import FeedPhotos from './components/FeedPhotos';
import FeedModal from './components/FeedModal';

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      if(infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
  
        if(scroll > height * .75 && !wait) {
          setPages(pages => [...pages, pages.length + 1]);
  
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll); // Scroll do mouse(rodinha do mouse
    window.addEventListener('scroll', infiniteScroll); // Scroll do browser(barra de scroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    }
  }, [infinite]);

  return (
    <div>
      {modalPhoto && <FeedModal  setModalPhoto={setModalPhoto} photo={modalPhoto} />}
      {pages.map(page => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setInfinite={setInfinite}
          setModalPhoto={setModalPhoto} 
        />
      ))}
    </div>
  )
}

export default Feed;