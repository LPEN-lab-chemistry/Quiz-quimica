import Button from '../components/button/Button';
import styles from './Quests.module.css';
import { useNavigate } from 'react-router-dom';

const Quests = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/conta")
  }
  const handleSobre = () => {
    navigate("/sobre")
  }
  const handleTelaInicial = () => {
    navigate("/")
  }


  const handlePerguntaFacil = () => {
    navigate("/perguntaFacil")
  }
  const handlePerguntaMedio = () => {
    navigate("/perguntaMedio")
  }
  const handlePerguntaDificil = () => {
    navigate("/perguntaDificil")
  }


  return (
    <div className={styles.quests}>
      <div className={styles.header}>
        <h1 className={styles.title}>Modos</h1>

        <div className={styles.nav}>
          <Button width="medium" height="small" theme="white-green" fontSize="medium" onClick={handleLogin}>Criar Conta</Button>
          <Button width="medium" height="small" theme="white-green" fontSize="medium" onClick={handleTelaInicial}>Tela Inicial</Button>
          <Button width="medium" height="small" theme="white-green" fontSize="medium" onClick={handleSobre}>Sobre</Button>
        </div>
      </div>

      <div className={styles.body}>

        <img className={styles.image} width="140px" src="src\assets/logo.png" alt="Imagem logo mico" />

        <table>
          <tr>
            <td><Button width="small" height="medium" theme="green" fontSize="large" onClick={handlePerguntaFacil}>Fácil</Button></td>
            <td><p className={styles.seta}>➜</p></td>
            <td><p>Perguntas sobre X</p></td>
          </tr>

          <tr>
            <td><Button width="small" height="medium" theme="orange" fontSize="large" onClick={handlePerguntaMedio}>Médio</Button></td>
            <td><p className={styles.seta}>➜</p></td>
            <td><p>Perguntas sobre Y</p></td>
          </tr>

          <tr>
            <td><Button width="small" height="medium" theme="red" fontSize="large" onClick={handlePerguntaDificil}>Difícil</Button></td>
            <td><p className={styles.seta}>➜</p></td>
            <td><p>Perguntas sobre Z</p></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Quests