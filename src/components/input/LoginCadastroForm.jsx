import React, { useState } from 'react';
import './LoginCadastroForm.css';
const LoginCadastroForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
  
      console.log('Login com:', email, password);
    } else {
    
      console.log('Cadastro com:', email, password);
    }
  };

  const handleToggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isLoginMode ? 'Login' : 'Cadastro'}</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Senha:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">{isLoginMode ? 'Entrar' : 'Cadastrar'}</button>
      <p>
        {isLoginMode ? 'Ainda não tem uma conta?' : 'Já possui uma conta?'}
        <button type="button" onClick={handleToggleMode}>
          {isLoginMode ? 'Cadastre-se' : 'Faça login'}
        </button>
      </p>
    </form>
  );
};

export default LoginCadastroForm;