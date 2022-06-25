import React from 'react';
import { Link } from 'react-router-dom';

/* Components & Assets */
import Input from '../../../components/Input';
import Button from '../../../components/Button';

function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  function handleSubmit(event) {
    event.preventDefault();
    const url = process.env.REACT_APP_URL_API;

    fetch(`${url}jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
        />
        <Input
          label="Senha"
          type="password"
          name="password"
        />

        <Button type="submit">Enviar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm;