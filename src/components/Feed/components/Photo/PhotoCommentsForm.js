import React from 'react';

/* Custom functions */
import useFetch from '../../../../hooks/useFetch';
import { COMMENT_POST } from '../../../../api';

/* Components & Assets */
import { ReactComponent as Envar } from '../../../../assets/enviar.svg';
import Error from '../../../Error';

function PhotoCommentsForm({ id, setComments }) {
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
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment} 
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button>
        <Envar />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm;