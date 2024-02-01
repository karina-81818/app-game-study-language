import { MyContext } from '../../Context/MyContext'
import { useContext, useState, useEffect } from 'react';
import Post from '../../Servise/Post'
import Get from '../../Servise/Get'
import styles from './NewWords.module.scss'

export default function NewWords() {
    const {words, setWords} = useContext(MyContext);
    const [upDateServer, setUpDateServer] = useState(false);
    const [english, setEnglish] = useState('');
    const [transcription, setTranscription] = useState('');
    const [russian, setRussian] = useState('');
    

    useEffect(()=>{
        getWordsServer();
    }, [])
    
    async function getWordsServer(){
        const wordsServer = await Get.getWords();
        setWords(wordsServer)
    }
    if(!words){
        return <h1>Loading.....</h1>
    }

 async function addPostServer(){
   const lastId = words[words.length-1].id;
   const newPost = {id: lastId +1, english, transcription, russian};
    setWords(prevState=>[...prevState, newPost])
    if(!newPost) return;
    await Post.wordsServerData(newPost)
    setEnglish(''), setTranscription(''), setRussian('')
    setUpDateServer((prevServer)=> !prevServer)
}

    return (
        <div >
            <form className={styles.row}>
                <div className={styles.td}>
                <input className={styles.input} type="text"
                name='english'
                placeholder='add english...'
                value={english}
                onChange={(e)=> setEnglish(e.target.value)} />
                </div>
                <div className={styles.td}>
                <input className={styles.input} type="text"
                name='transcription'
                placeholder='add transcription...'
                value={transcription}
                onChange={(e)=> setTranscription(e.target.value)} />
                </div>
                <div  className={styles.td}>
                <input className={styles.input} type="text"
                name='russian'
                placeholder='add russian...'
                value={russian}
                onChange={(e)=> setRussian(e.target.value)} />
                </div>
                <div className={styles.btnContainer}>
                </div>
            </form>
            <button className={styles.btn}  
            onClick={addPostServer}>Добавить новое слово</button>
        </div>
        
    );
}

