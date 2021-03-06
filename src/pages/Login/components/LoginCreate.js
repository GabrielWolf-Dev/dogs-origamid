import React from 'react';

/* Custom functions */
import useForm from '../../../hooks/useForm';
import { USER_POST } from '../../../api';
import { UserContext } from '../../../context/UserContext';
import useFetch from '../../../hooks/useFetch';

/* Components & Assets */
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import Head from '../../../helper/Head';

function LoginCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });
    const { response } = await request(url, options);
    if(response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <Head
        title="Crie a sua conta"
        description="Home do site Dogs, com o feed de fotos."
      />
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          name="username"
          type="text"
          {...username}
        />
        <Input
          label="E-mail"
          name="email"
          type="email"
          {...email}
        />
        <Input
          label="Senha"
          name="password"
          type="password"
          {...password}
        />

        {loading
        ? <Button disabled>Cadastrar</Button>
        : <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate;