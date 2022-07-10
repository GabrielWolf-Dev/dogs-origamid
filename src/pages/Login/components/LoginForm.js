import React from 'react';
import { Link } from 'react-router-dom';

/* Custom functions */
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../context/UserContext';

/* Components & Assets */
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';

import styles from '../style.module.css';
import stylesBtn from '../../../components/Button/styles.module.css';
import Head from '../../../helper/Head';

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()) userLogin(username.value, password.value);
  }
  return (
    <section className="animeLeft">
      <Head
        title="Login"
        description="Home do site Dogs, com o feed de fotos."
      />
      <h1 className="title">Login</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Input
          label="Usuário"
          type="text"
          name="username"
          {...username}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading
        ? <Button disabled>Carregando...</Button>
        : <Button type="submit">Enviar</Button>}
        <Error error={error} />
      </form>
      <Link
        className={styles.perdeu}
        to="/login/perdeu"
      >
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>

        <Link
          className={stylesBtn.button}
          to="/login/criar"
        >
          Cadastro
        </Link>
      </div>
    </section>
  )
}

export default LoginForm;