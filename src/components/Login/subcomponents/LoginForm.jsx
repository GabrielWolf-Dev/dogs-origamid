import React from 'react';
import { Link } from 'react-router-dom';

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
        <input
          type="text"
          name="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm;