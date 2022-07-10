import React from 'react';
import { useNavigate } from 'react-router-dom';

/* Custom Hooks */
import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import { PASSWORD_RESET } from '../../../api';

/* Components & Assets */
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import Head from '../../../helper/Head';

function LoginPasswdReset() {
  const [login, setLogin] = React.useState();
  const [key, setKey] = React.useState();
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if(key) setKey(key);
    if(login) setLogin(login);
  }, []);

  async function handleSumit(event) {
    event.preventDefault();


    if(password.validate('password')) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      });
  
      const { response } = await request(url, options);
      if(response.ok) navigate('/login');
    }
  }

  return (
    <section className='animeLeft'>
      <Head
        title="Resete a senha"
        description="Home do site Dogs, com o feed de fotos."
      />
      <h1 className='title'>Resetar senha</h1>

      <form onSubmit={handleSumit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginPasswdReset;