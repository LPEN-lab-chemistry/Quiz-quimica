import Button from "../../components/button/Button";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    navigate("/outrasPerguntas");
  };

  return (
    <div className={styles["login-container"]}>
      <header className={styles["header"]}>
        <h1>Conta</h1>
        <div className={styles["right"]}>
          <div className={styles["button-sobre"]}>
            <Button
              width="small"
              height="small"
              theme="orange"
              fontSize="large"
            >
              Sobre
            </Button>
          </div>
        </div>
      </header>
      <div className={styles["logo-container"]}>
        <img src="src\assets/logo.png" alt="Imagem logo mico" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles["inputslogin"]}>
          <label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Senha"
            />
          </label>
        </div>
        <Button
          width="small"
          height="small"
          theme="white-green"
          fontSize="large"
        >
          Logar
        </Button>
      </form>
    </div>
  );
}

export default Login;
