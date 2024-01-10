import React from 'react';
import { useState } from 'react';
import styles from './Table.module.scss'

function Table(props) {
    const [edited, setEdit] = useState(false);
   
    const handleEditState = ()=>{
        setEdit(true)
    }
    const handleCancelState = ()=>{
        setEdit(false)
    }
    
    return ( 
        <div className={styles.container}{...props}>
            <div className={`${styles.td} ${styles.id}`}>{props.id}</div>
            <div className={styles.td}>{edited
            ?<input type="text" />:props.english}</div>
            <div className={styles.td}>{edited
            ?<input type="text" />:props.transcription}</div>
            <div className={styles.td}>{edited
            ?<input type="text" />:props.russian}</div>
            <div className={`${styles.td} ${styles.btnContainer}`}>
            <button className={styles.edit} onClick={handleEditState}><span className='material-symbols-outlined'>edit</span></button>
            <button className={styles.cancel} onClick={handleCancelState}><span className='material-symbols-outlined'>cancel</span></button>
            <button className={styles.save}><span className='material-symbols-outlined'>save_as</span></button>
            <button className={styles.del}><span className='material-symbols-outlined'>delete</span></button>
            </div>  
        </div>
            );
}
export default Table;

