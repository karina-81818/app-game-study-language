import { MyContext } from '../../Context/MyContext'
import { useContext, useState, useEffect} from 'react';
import Table from '../../Components/Table/Table';
import styles from './TablePage.module.scss'
import NewWords from '../../Components/NewWords/NewWords'
import Put from '../../Servise/Put.js'
import Del from '../../Servise/Del.js';


export default function TablePage() {
    const {words, setWords} = useContext(MyContext);

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
    const deleteItem=(id)=>{
        const updateList = words.filter((item)=> item.id !== id)
        setWords(updateList)
        Del.delWords(updateList)
    }
    return (
         <div >
            {words?.map((item)=>(
                <div className={styles.container} key={item.id}>
                    <Table {...item} editRowUsers={editRowUsers} deleteItem={deleteItem}/>
                </div>
            ))}
           <NewWords/>
         </div>
    );
}