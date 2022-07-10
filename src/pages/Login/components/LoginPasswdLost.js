import React from 'react';

/* Custom Hooks */
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import { PASSWORD_LOST } from '../../../api';

/* Components & Assets */
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import Head from '../../../helper/Head';

function LoginPasswdLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if(login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar')
      });
  
      request(url, options);
    }
  }

  return (
    <section>
      <Head
        title="Perdeu a senha"
        description="Home do site Dogs, com o feed de fotos."
      />
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? (
        <p
          style={{ color: "#4c1" }}
        >{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input 
            type="text"
            label="Email/Usuário"
            name="email"
            {...login}
          />

          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar E-mail</Button>
          )}
        </form>
      )}
      <Error erro={error} />
    </section>
  )
}

export default LoginPasswdLost;