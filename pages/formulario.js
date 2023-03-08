import Formulario from "../src/componentes/formulario"
import styles from '../styles/Formulario.module.css'
import Forminput from "../src/componentes/Forminput"
import Link from "next/link"


export default function formulario(){
    return(
        <div className={styles.background}>
    <Formulario className={styles.titulo} titulo="INFORMAÇÃO DOS DADOS">
           <div className={styles.border}>
           <div className={styles.detalhes}>
           <header className={styles.header}>Dados basicos</header>
           <form className={styles.form}>
            <div className={styles.field}>
              <label>Nome Completo:</label>
              <Forminput type= "text" placeholder = "Digite o nome"/>
           </div>
           <div className={styles.field}>
              <label>CPF:</label>
              <Forminput type= "number" placeholder = "Cpf"/>
           </div>
           <div className={styles.field}>
              <label>RG:</label>
              <Forminput type= "number" placeholder = "Rg"/>
            </div>
           <div className={styles.field}>
           <label>Telefone:</label>
              <Forminput type= "tel" id="phone" name="phone" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"placeholder = "(xx) xxxx-xxxx"/>
            </div>
            <div className={styles.field}>
              <label>Email:</label>
              <Forminput type= "email" placeholder = "Digite o email"/>
            </div>
            <div className={styles.field}>
              <label>Data de Nascimento:</label>
              <Forminput type="date"/>
            </div>
            <div className={styles.field}>
              <label>Sexo:</label>
              <Forminput type= "text" placeholder = "Sexo"/>
            </div>
           </form>
           <header className={styles.header}>ENDEREÇO</header>
           <form className={styles.form}>
           <div className={styles.field}>
              <label>CEP:</label>
              <Forminput type= "number" placeholder = "Cep"/>
            </div>
           <div className={styles.field}>
              <label>Logradouro:</label>
              <Forminput type= "text" placeholder = "Logradouro"/>
            </div>
            <div className={styles.field}>
              <label>Bairro:</label>
              <Forminput type= "text" placeholder = "Bairro"/>
            </div>
            <div className={styles.field}>
              <label>Numero residencial:</label>
              <Forminput type= "number" placeholder = "Numero"/>
            </div>
            <div className={styles.field}>
              <label>Complemento:</label>
              <Forminput type= "text" placeholder = "Complemento"/>
            </div>
            <button className={styles.button}>
            <Link href="manutencao">Proximo</Link>
            </button>
           </form>       
           </div>
           </div>
    </Formulario>
    </div>
    )
}