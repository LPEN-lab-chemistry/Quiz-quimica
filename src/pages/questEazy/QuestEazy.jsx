import Button from '../../components/button/Button';
import styles from './QuestEazy.module.css';
import { useNavigate } from 'react-router-dom';

const QuestEazy = () => {

  const navigate = useNavigate();

  const handleSobre = () => {
    navigate("/sobre")
  }
  const handleTelaInicial = () => {
    navigate("/")
  }
  const handleOutrasPerguntas = () => {
    navigate("/outrasPerguntas")
  }
  const handlePerguntaFacil = () => {
    navigate("/perguntaFacil")
  }

  return (
    <div className={styles.questEazy}>
      <div className={styles.header}>

        <div className={styles.imageDiv}>
          <img className={styles.image} width="90px" src="src\assets/logo.png" alt="Imagem logo mico" />
        </div>

        <div className={styles.titleDiv}>
          <h1 className={styles.title}>Pergunta X (modelo fácil)</h1>
        </div>
      </div>


      <div className={styles.body}>
        <div className={styles.quest}>
          <table>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>

            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>

            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
          </table>
        </div>
        {/* cards */}

        <div className={styles.nav}>
          <div className={styles.impar}>
            <Button width="large" height="medium" theme="white-green" fontSize="large" onClick={handleSobre}>Sobre</Button>
          </div>
          <div className={styles.par}>
            <Button width="large" height="medium" theme="white-green" fontSize="large" onClick={handleTelaInicial}>Tela Inicial</Button>
          </div>
          <div className={styles.impar}>
            <Button width="large" height="medium" theme="white-green" fontSize="large" onClick={handleOutrasPerguntas}>Outras Perguntas</Button>
          </div>
          <div className={styles.par}>
            <Button width="large" height="medium" theme="white-green" fontSize="large" onClick={handlePerguntaFacil}>Criar Conta</Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default QuestEazy