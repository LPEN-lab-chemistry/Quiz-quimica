import styles from './button.module.css';

const Button = ({width, height , padding, theme, radius, fontSize, onClick, ...props}) => {
    const classNames = {
        button: styles.button,
        height: styles[`button-height--${height}`],
        width: styles[`button-width--${width}`],
        padding: styles[`button-padding--${padding}`],
        radius: styles[`button-radius--${radius}`],
        theme: styles[`button-theme--${theme}`],
        font: styles[`button-font-size--${fontSize}`]
    }

  return (
    <button onClick={()=> onClick()} className={Object.values(classNames).join(' ')}>
        {props.children}
    </button>
  )
}


export default Button