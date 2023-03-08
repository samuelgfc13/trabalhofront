import styles from './forminput.module.css'

export default function Forminput (props){
    return(
        <input className={styles.input} {...props}/>
    )
}