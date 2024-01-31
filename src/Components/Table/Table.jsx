import { useState, useEffect } from 'react';
import styles from './Table.module.scss'

export default function Table({english, transcription, russian, id, editRowUsers}) {
    const [edited, setEdit] = useState(true);
    const [englishInput, setEnglishInput] = useState('');
    const [transcriptionInput, setTranscriptionInput] = useState('');
    const [russianInput, setRussianInput] = useState('');
    const [englishError, setEnglishError] = useState('');
    const [transError, setTransError] = useState('');
    const [rusError, setRusError] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(()=>{
        setEnglishInput(english);
        setTranscriptionInput(transcription);
        setRussianInput(russian)
    }, [english, transcription, russian]
    );

    useEffect(()=>{
        if(englishError || transError || rusError){
            setFormValid(false)      
        }else{
            setFormValid(true) 
        }
    }, [englishInput, transcriptionInput, russianInput]);

    const englishHandler = (e) =>{
        setEnglishInput(e.target.value);
        const re = /^[a-zA-Z]+$/;
        if(!re.test(String(e.target.value))) {
            setEnglishError('Поле должно быть заполнено на английском')
            if(!e.target.value){
                setEnglishError('Поле английский не должно быть пустым')
             }
         }
         else {
            setEnglishError('')
        }
    }
    const transcriptionHandler = (e) =>{
        setTranscriptionInput(e.target.value)
        const tr = /^[a-zA-Z]+$/
        if(!tr.test(String(e.target.value))) {
            setTransError('Поле должно быть заполнено на английском в транскрипции')
            if(!e.target.value){
                setTransError('Поле транскрипция не должно быть пустым')
             }
         } 
         else {
            setTransError('')
        }
    }
    const russianHandler = (e) =>{
        setRussianInput(e.target.value)
        const ru = /^[а-яА-Я]+$/
        if(!ru.test(String(e.target.value))) {
            setRusError('Поле должно быть заполнено на русском')
            if(!e.target.value){
                setRusError('Поле перевод не должно быть пустым')
             }
         }
         else {
            setRusError('')
        }
    }
   
    return ( 
        <div >
            {edited ? (
                <div className={styles.row}>
                    <div className={styles.td}>{english}</div>
                    <div className={styles.td}>{transcription}</div>
                    <div className={styles.td}>{russian}</div>
                    <div className={styles.btnContainer} >
                    <button
                    onClick={()=>setEdit(false)}><span className='material-symbols-outlined'>edit</span>
                    </button>
                    </div>
                </div>
            ):(
                <div className={styles.row}>
                    <div className={styles.td}>
                        {englishError && <div className={styles.error}>{englishError}</div>}
                        <input className={styles.input} onChange={e=>englishHandler(e)} name='english' type="text" required value={englishInput}  />
                    </div>
                    <div className={styles.td}>
                        {transError && <div className={styles.error}>{transError}</div>}
                        <input className={styles.input} name='transcription' type="text" required value={transcriptionInput} onChange={e=>transcriptionHandler(e)} />
                    </div>
                    <div className={styles.td}>
                       {rusError && <div className={styles.error}>{rusError}</div>}
                        <input className={styles.input} name='russian' type="text" required value={russianInput} onChange={e=>russianHandler(e)} />
                    </div>
                    <div className={styles.btnContainer}> 
                    <button onClick={()=>setEdit(true)}><span className='material-symbols-outlined'>cancel</span></button>
                    <button  
                    onClick={()=>{
                        editRowUsers(id, englishInput, transcriptionInput, russianInput);
                        setEdit(true);
                    }}  disabled={!formValid}><span className='material-symbols-outlined'>save</span>
                    </button>
                    </div>
                </div>)
            }
     </div>
     
    )
}
