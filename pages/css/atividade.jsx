
import styles from "./atividade.module.css"


function atividade(){
    return(
            <> 
            <h1 id ={styles.titulo}>Tipos de desenvolvedor front-ende, banck-and e full-Stack</h1>
            <section id ={styles.container}>
                <div id={styles.front}>
                 <h2>Front-End</h2>
                 </div>
                 <div id={styles.back}>
                 <h2>Back-End</h2>
                 </div>
                 <div id={styles.full}>
                 <h2>Full-Stack</h2>
                 </div>
            </section>

            </>
    )
}
export default atividade;

