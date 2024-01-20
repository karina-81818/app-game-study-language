import Table from '../../Components/Table/Table';
import styles from './TablePage.module.scss'

export default function TablePage({ words, setWords }) {
    function editRowUsers(id, english, transcription, russian){
        const copyArrUsers = words.map((item)=>{
            if(item.id===id){
                item.english = english;
                item.transcription = transcription;
                item.russian = russian;
                return item;
            }
            return item;
        })
        setWords(copyArrUsers);
    }

    return (
         <div >
            {words.map((item)=>(
                <div className={styles.container} key={item.id}>
                    <Table {...item} editRowUsers={editRowUsers}/>
                </div>
            ))}
         </div>
    );
}