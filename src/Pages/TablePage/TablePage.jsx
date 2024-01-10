import Table from '../../Components/Table/Table';
import styles from './TablePage.module.scss'

export default function TablePage({ stateWords }) {
    return (
         <div className={styles.container}>
         <div className={styles.title}>
            <div className={`${styles.td} ${styles.id}`}>#</div>
            <div className={styles.td}>english</div>
            <div className={styles.td}>transcription</div>
            <div className={styles.td}>russian</div>
            <div className={styles.td}></div>
        </div>
            { stateWords.words.map((item)=>{
                return(
                    <Table key={item.id} {...item}/>
                )
            })}
         </div>
        
    );
}