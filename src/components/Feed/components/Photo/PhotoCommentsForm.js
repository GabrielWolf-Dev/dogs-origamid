import React from 'react';

/* Custom functions */
import useFetch from '../../../../hooks/useFetch';
import { COMMENT_POST } from '../../../../api';

/* Components & Assets */
import { ReactComponent as Envar } from '../../../../assets/enviar.svg';
import Error from '../../../Error';

import styles from './style.module.css';

function PhotoCommentsForm({ id, setComments, single }) {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, { comment }, token);

    const { response, json } = await request(url, options);
    if(response.ok) {
      setComment('');
      setComments(comments => [...comments, json]);
    }
  }

  return (
    <form 
      className={`
        ${styles.form}
        ${single ? styles.photoSingle : ''}
      `} 
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment} 
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button className={styles.button}>
        <Envar />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm;