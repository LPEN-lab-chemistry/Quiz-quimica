import React from 'react';
import LoginCadastroForm from '../components/input/LoginCadastroForm';
import Button from '../components/button/Button';
import './Login.css'; //poderia ser modules e dentro do styles

function Login() {
  return (
    <div className="login-container">
      <header className="header">
        <div className="left">
          <h1>Conta</h1>
        </div>
        <div className="center">
          <img src="src\assets/logo.png" alt="Imagem logo mico" />
        </div>
        <div className="right">
          <div className="buttonsobre">
            <Button>Sobre</Button>
          </div>
        </div>
      </header>
      <LoginCadastroForm />
    </div>
  );
}

export default Login;