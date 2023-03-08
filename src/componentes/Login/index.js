import styles from './login.module.css'
export default function conta({titulo, children}){
    return(
        <div className = {styles.card}>
            <h3 className={styles.titulo}>{titulo}</h3>
            {children}
        </div>
    )
}