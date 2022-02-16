import '../App.css'
import SayMyName from './SayMyName'
import styles from './Frase.module.css'  


function Frase() {

    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>
                "Recebemos três tipos de EDUCAÇÃO: a primeira, de nossos pais. Depois, dos nossos professores. Terceiro, do mundo. Essa terceira contraria as outras duas primeiras." Montesquieu
            </p>
        </div>
    )

}

export default Frase