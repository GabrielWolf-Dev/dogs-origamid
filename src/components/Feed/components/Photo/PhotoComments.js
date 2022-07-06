import React from 'react';

/* Custom functions */
import { UserContext } from '../../../../context/UserContext';

/* Components & Assets */
import PhotoCommentsForm from './PhotoCommentsForm';

import styles from './style.module.css';

function PhotoComments(props) {
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);

  return (
    <>
      <ul className={styles.comment}>
        {
          comments.map(comment => (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))
        }
      </ul>
      {login && <PhotoCommentsForm id={props.id}  setComments={setComments}/>}
    </>
  )
}

export default PhotoComments;