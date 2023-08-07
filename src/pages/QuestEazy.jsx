import Button from '../components/button/Button';
import styles from './Quests.module.css';

const Quests = () => {


  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <h1 className={styles.title}>Modos</h1>

        <div className={styles.nav}>
          <Button width="medium" height="small" theme="white-green" fontSize="medium" onClick="history.pushState({}, null, conta)">Criar Conta</Button>
          <Button width="medium" height="small" theme="white-green" fontSize="medium" onClick="history.pushState({}, null, conta)">Tela Inicial</Button>
          <Button width="medium" height="small" theme="white-green" fontSize="medium" onClick="history.pushState({}, null, conta)">Sobre</Button>
        </div>
      </div>

      <div className={styles.body}>

        <img className={styles.image} width="140px" src="src\assets/logo.png" alt="Imagem logo mico" />

        <table>
          <tr>
            <td><Button width="small" height="medium" theme="green" fontSize="large" onClick="history.pushState({}, null, conta)">Fácil</Button></td>
            <td><p className={styles.seta}>➜</p></td>
            <td><p>Perguntas sobre X</p></td>
          </tr>

          <tr>
            <td><Button width="small" height="medium" theme="orange" fontSize="large" onClick="history.pushState({}, null, conta)">Médio</Button></td>
            <td><p className={styles.seta}>➜</p></td>
            <td><p>Perguntas sobre Y</p></td>
          </tr>

          <tr>
            <td><Button width="small" height="medium" theme="red" fontSize="large" onClick="history.pushState({}, null, conta)">Difícil</Button></td>
            <td><p className={styles.seta}>➜</p></td>
            <td><p>Perguntas sobre Z</p></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Quests