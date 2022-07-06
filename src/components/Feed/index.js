import React from 'react';

/* Components & Assets */
import FeedPhotos from './components/FeedPhotos';
import FeedModal from './components/FeedModal';

function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal  setModalPhoto={setModalPhoto} photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  )
}

export default Feed;