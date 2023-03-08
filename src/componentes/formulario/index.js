import styles from './formulario.module.css'

export default function formulario({titulo, children}){
    return(
        <div className = {styles.cardform}>
            <h3 className={styles.titulo}>{titulo}</h3>
            {children}
        </div>
    )
}
