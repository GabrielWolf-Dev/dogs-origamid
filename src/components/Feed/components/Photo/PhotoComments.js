import React from 'react';

/* Custom functions */
import { UserContext } from '../../../../context/UserContext';

/* Components & Assets */
import PhotoCommentsForm from './PhotoCommentsForm';

import styles from './style.module.css';

function PhotoComments(props) {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul 
        className={`
          ${styles.comments}
          ${props.single ? styles.photoSingle : ''}
        `} 
        ref={commentsSection}
      >
        {
          comments.map(comment => (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))
        }
      </ul>
      {login && <PhotoCommentsForm single={props.single} id={props.id}  setComments={setComments}/>}
    </>
  )
}

export default PhotoComments;