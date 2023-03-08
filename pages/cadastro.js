import Button from "../src/componentes/button"
import styles from "../styles/Cadastro.module.css"
import Login from "../src/componentes/Login/index"
import Input from "../src/componentes/Input"
import Link from 'next/link'

export default function cadastro(){
    return(
        <div className={styles.background}>            
        <Login titulo="Criar Conta">
            <form className={styles.form}>
            <Input type="text" placeholder="Nome:" />
            <Input type="email" placeholder="Seu e-mail:" />
            <Input type="password" placeholder="Digite sua senha:"/>
            <Button>Cadastrar</Button>
            <Link href="login">Ja possui uma conta?</Link>
            </form>
        </Login>
        </div>
    )
}