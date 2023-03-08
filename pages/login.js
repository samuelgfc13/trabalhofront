import styles from '../styles/Login.module.css'
import Login from '../src/componentes/Login/index.js'
import Input from '../src/componentes/Input'
import Button from '../src/componentes/button'
import Link from 'next/link'

export default function conta(){
    return(
        <div className={styles.background}> 
        <Login titulo="Acessar conta">  
            <form className={styles.form}>
            <Input type="email" placeholder="Seu e-mail:" />
            <Input type="password" placeholder="Digite sua senha:"/>
            <Button>Entrar</Button>
            <Link href="cadastro">Não tenho conta</Link>
            </form>
        </Login>
        </div>
    )
}