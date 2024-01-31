import { MyContext } from '../../Context/MyContext'
import { useContext, useState, useEffect} from 'react';
import Table from '../../Components/Table/Table';
import styles from './TablePage.module.scss'
import Get from '../../Servise/Get'
import NewWords from '../../Components/NewWords/NewWords'
import Put from '../../Servise/Put.js'

export default function TablePage() {
    const {words, setWords} = useContext(MyContext);
    const [english, setEnglish] = useState('');
    const [transcription, setTranscription] = useState('');
    const [russian, setRussian] = useState('');

     function editRowUsers(id, english, transcription, russian){
        const copyArrUsers = words?.map((item)=>{
            if(item.id===id){
                item.english = english;
                item.transcription = transcription;
                item.russian = russian;
                return item;
            }
            return item;
        })
        setWords(copyArrUsers);
         Put.editServerData(copyArrUsers)
    }

    return (
         <div >
            {words?.map((item)=>(
                <div className={styles.container} key={item.id}>
                    <Table {...item} editRowUsers={editRowUsers} />
                </div>
            ))}
           <NewWords/>
         </div>
    );
}